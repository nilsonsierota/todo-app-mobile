import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TaskStepsEnum } from '../../reducers';

export type Props = {
  label: string;
  status?: TaskStepsEnum;
  isSelected?: boolean;
  onPress: VoidFunction;
};

const tinyCheckImage = require('../../../assets/tiny-check.png');

export function TaskItem({
  isSelected = false,
  label,
  status = TaskStepsEnum.Ready,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.containerSelected]}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
      {status === TaskStepsEnum.InProgress && (
        <Text style={styles.text}>In progress</Text>
      )}
      {status === TaskStepsEnum.Finished && <Image source={tinyCheckImage} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  containerSelected: {
    borderLeftWidth: 5,
    borderLeftColor: '#fff',
  },
  label: {
    fontSize: 14,
    color: '#fff',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});
