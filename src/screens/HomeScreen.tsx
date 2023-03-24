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

const logo = require('../../assets/logo.png');

export function HomeScreen() {
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        {false ? (
          <NoTasksCard />
        ) : (
          <>
            <Timer />
            <TasksList />
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
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  logo: {
    width: 227,
    height: 46,
    alignSelf: 'center',
    marginVertical: 20,
  },
});
