import { FlatList, StyleSheet } from 'react-native';
import { TaskItem, Props as TaksItemProps } from './TaskItem';

type Props = {
  selectedIndex: number;
  data: Omit<TaksItemProps, 'onPress'>[];
  onPress: (index: number) => void;
};

export function TasksList({ selectedIndex, data, onPress }: Props) {
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.container}
      renderItem={({ item, index }) => (
        <TaskItem
          {...item}
          isSelected={index === selectedIndex}
          onPress={() => onPress(index)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
