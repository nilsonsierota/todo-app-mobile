import React from 'react';

import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Theme } from '../../themes';

type Props = {
  variant?: 'primary' | 'light';
  label?: string;
  icon?: any;
  onPress?: VoidFunction;
};

export function Button({ variant = 'primary', label, icon, onPress }: Props) {
  let touchableOpacityStyle: any = { backgroundColor: Theme.colors.primary };
  let textStyle = { color: 'white' };

  if (variant === 'light') {
    touchableOpacityStyle = {
      backgroundColor: 'white',
      elevation: 0.5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 5,
      shadowOpacity: 0.15,
    };
    textStyle = { color: Theme.colors.primary };
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, touchableOpacityStyle]}
    >
      {!!label && <Text style={[styles.text, textStyle]}>{label}</Text>}
      {!!icon && <Image source={icon} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
