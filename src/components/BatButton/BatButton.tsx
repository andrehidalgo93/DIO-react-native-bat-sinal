import React from 'react';
import {  Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './BatButtonStyles';

export function BatButton(props: TouchableOpacityProps) {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        {...props}
      >
        <Text style={styles.text}>🚨 ACTIVATE BAT SIGNAL 🚨</Text>
      </TouchableOpacity>
    </>
  );
}