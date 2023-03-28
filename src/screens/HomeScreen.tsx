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
              <Timer
                enabled={HomeScreenAction.isTimerEnabled(state)}
                handleStart={() => dispatch(HomeScreenAction.taskStart())}
                handleCheck={() => dispatch(HomeScreenAction.taskFinished())}
                handleStop={() => dispatch(HomeScreenAction.taskStop())}
              />
            </View>
            <TasksList
              selectedIndex={state.selectedTaskIndex}
              data={state.tasks}
              onPress={(selectedTaskIndex: number) =>
                dispatch(
                  HomeScreenAction.selectedTaskIndex({ selectedTaskIndex })
                )
              }
            />
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
    marginVertical: 50,
  },
});
