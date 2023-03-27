import { FlatList, StyleSheet } from 'react-native';
import { TaskItem, Props as TaksItemProps } from './TaskItem';

type Props = {
  data: TaksItemProps[];
};

export function TasksList({ data }: Props) {
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => <TaskItem {...item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
