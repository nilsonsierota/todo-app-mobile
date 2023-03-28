import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../Buttons/Button';
import { useEffect, useMemo, useState } from 'react';

const playImage = require('../../../assets/play.png');
const pauseImage = require('../../../assets/pause.png');
const stopImage = require('../../../assets/stop.png');
const restartImage = require('../../../assets/restart.png');
const strongCheckImage = require('../../../assets/strong-check.png');

enum TimerStepsEnum {
  Stop = 'START',
  InProgress = 'IN_PROGRESS',
  Finished = 'FINISHED',
}

const TIMER_SECONDS_DEFAULT = 5;

type Props = {
  enabled?: boolean;
  handleStart?: VoidFunction;
  handleCheck?: VoidFunction;
  handleStop?: VoidFunction;
};

export function Timer({
  enabled = false,
  handleStart,
  handleCheck,
  handleStop,
}: Props) {
  const [step, setStep] = useState(TimerStepsEnum.Stop);
  const [isRunning, setIsRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(TIMER_SECONDS_DEFAULT);

  function onStart() {
    handleStart?.();
    setIsRunning(true);
    setTimerSeconds(TIMER_SECONDS_DEFAULT);
    setStep(TimerStepsEnum.InProgress);
  }

  function onResume() {
    setIsRunning(true);
    setStep(TimerStepsEnum.InProgress);
  }

  function onPause() {
    setIsRunning(false);
    setStep(TimerStepsEnum.InProgress);
  }

  function onStop() {
    handleStop?.();
    setIsRunning(false);
    setTimerSeconds(TIMER_SECONDS_DEFAULT);
    setStep(TimerStepsEnum.Stop);
  }

  function onRestart() {
    setIsRunning(true);
    setTimerSeconds(TIMER_SECONDS_DEFAULT);
    setStep(TimerStepsEnum.InProgress);
  }

  function onFinished() {
    setIsRunning(false);
    setStep(TimerStepsEnum.Finished);
  }

  function onCheck() {
    handleCheck?.();
    setIsRunning(false);
    setTimerSeconds(TIMER_SECONDS_DEFAULT);
    setStep(TimerStepsEnum.Stop);
  }

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => {
      const seconds = timerSeconds - 1;
      setTimerSeconds(seconds);
      if (seconds === 0) {
        onFinished();
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timerSeconds, isRunning]);

  const aux = timerSeconds % 3600;
  const minutes = String(Math.floor(aux / 60)).padStart(2, '0');
  const seconds = String(Math.ceil(aux % 60)).padStart(2, '0');

  const timerStatus = useMemo(() => {
    if (step === TimerStepsEnum.Stop) {
      return 'Ready';
    }
    if (step === TimerStepsEnum.InProgress) {
      return isRunning ? 'In Progress' : 'Pause';
    }
    if (step === TimerStepsEnum.Finished) {
      return 'Finished';
    }
  }, [step, isRunning]);

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>{timerStatus}</Text>
      <Text style={styles.timerText}>
        {minutes}:{seconds}
      </Text>
      <View style={styles.controls}>
        {step === TimerStepsEnum.Stop && (
          <View style={{ width: '65%' }}>
            <Button
              disabled={!enabled}
              variant="light"
              label="START"
              onPress={onStart}
            />
          </View>
        )}
        {step === TimerStepsEnum.InProgress && (
          <>
            <Button variant="light" icon={playImage} onPress={onResume} />
            <View style={{ paddingHorizontal: 5 }}>
              <Button variant="light" icon={pauseImage} onPress={onPause} />
            </View>
            <Button variant="light" icon={stopImage} onPress={onStop} />
          </>
        )}
        {step === TimerStepsEnum.Finished && (
          <>
            <Button variant="light" icon={restartImage} onPress={onRestart} />
            <View style={{ paddingHorizontal: 5 }}>
              <Button
                variant="light"
                icon={strongCheckImage}
                onPress={onCheck}
              />
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
