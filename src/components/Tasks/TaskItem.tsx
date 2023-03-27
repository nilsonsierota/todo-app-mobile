import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
  label: string;
  status?: 'READY' | 'IN_PROGRESS' | 'DONE';
  isSelected?: boolean;
};

const tinyCheckImage = require('../../../assets/tiny-check.png');

export function TaskItem({
  isSelected = false,
  label,
  status = 'READY',
}: Props) {
  return (
    <View style={[styles.container, isSelected && styles.containerSelected]}>
      <Text style={styles.label}>{label}</Text>
      {status === 'IN_PROGRESS' && <Text style={styles.text}>In progress</Text>}
      {status === 'DONE' && <Image source={tinyCheckImage} />}
    </View>
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
