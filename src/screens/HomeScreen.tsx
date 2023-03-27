import { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Theme } from '../themes';
import {
  FabButton,
  NewTaskModal,
  NoTasksCard,
  TasksList,
  Timer,
} from '../components';

const logoImage = require('../../assets/logo.png');

export function HomeScreen() {
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);

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
            <TasksList
              data={[
                {
                  label: 'Create a frontend project',
                  status: 'IN_PROGRESS',
                  isSelected: true,
                },
                {
                  label: 'Create a frontend project',
                  status: 'READY',
                  isSelected: false,
                },
                {
                  label: 'Create a frontend project',
                  status: 'READY',
                  isSelected: false,
                },
              ]}
            />
          </>
        )}
        <FabButton onPress={() => setIsNewTaskModalVisible(true)} />
        <NewTaskModal
          isVisible={isNewTaskModalVisible}
          OnClose={() => setIsNewTaskModalVisible(false)}
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
