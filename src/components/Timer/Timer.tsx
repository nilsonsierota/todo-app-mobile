import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../Buttons/Button';

const playImage = require('../../../assets/play.png');
const pauseImage = require('../../../assets/pause.png');
const stopImage = require('../../../assets/stop.png');
const restartImage = require('../../../assets/restart.png');
const strongCheckImage = require('../../../assets/strong-check.png');

type Props = {
  step?: 'START' | 'IN_PROGRESS' | 'FINISHED';
};

export function Timer({ step = 'START' }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>Ready</Text>
      <Text style={styles.timerText}>25:00</Text>
      <View style={styles.controls}>
        {step === 'START' && (
          <View style={{ width: '65%' }}>
            <Button variant="light" label="START" />
          </View>
        )}
        {step === 'IN_PROGRESS' && (
          <>
            <Button variant="light" icon={playImage} />
            <View style={{ paddingHorizontal: 5 }}>
              <Button variant="light" icon={pauseImage} />
            </View>
            <Button variant="light" icon={stopImage} />
          </>
        )}
        {step === 'FINISHED' && (
          <>
            <Button variant="light" icon={restartImage} />
            <View style={{ paddingHorizontal: 5 }}>
              <Button variant="light" icon={strongCheckImage} />
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 240,
    paddingVertical: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  timerText: {
    fontSize: 75,
    fontWeight: 'bold',
    color: 'white',
  },
  controls: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
