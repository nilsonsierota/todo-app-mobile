import { useReducer } from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { Theme } from '../themes';
import {
  FabButton,
  NewTaskModal,
  NoTasksCard,
  TasksList,
  Timer,
} from '../components';
import {
  HomeScreeReducer,
  HomeScreenAction,
  homeScreenInitialState,
} from '../reducers';

const logoImage = require('../../assets/logo.png');

export function HomeScreen() {
  const [state, dispatch] = useReducer(
    HomeScreeReducer,
    homeScreenInitialState
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={logoImage} style={styles.logo} resizeMode="contain" />
        {false ? (
          <NoTasksCard />
        ) : (
          <>
            <View style={styles.timeContainer}>
              <Timer />
            </View>
            <TasksList data={state.tasks} />
          </>
        )}
        <FabButton
          onPress={() =>
            dispatch(HomeScreenAction.toggleModal({ isModalVisible: true }))
          }
        />
        <NewTaskModal
          isVisible={state.isModalVisible}
          OnClose={() =>
            dispatch(HomeScreenAction.toggleModal({ isModalVisible: false }))
          }
          onSubmit={(label: string) =>
            dispatch(
              HomeScreenAction.createTask({
                task: {
                  label,
                  isSelected: false,
                  status: 'READY',
                },
              })
            )
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
  },
  container: {
    flex: 1,
  },
  timeContainer: {
    paddingHorizontal: 20,
  },
  logo: {
    width: 227,
    height: 46,
    alignSelf: 'center',
    marginVertical: 30,
  },
});
