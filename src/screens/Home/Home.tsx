import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './HomeStyles';
import { BatButton } from '../../components/BatButton/BatButton';

import batLogo from '../../../assets/bat-logo.png';
import { BatForm } from '../../components/BatForm/BatForm';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  function handleVisibility() {
    setIsVisible((oldValue: boolean) => !oldValue);
  }

  return (
    <View style={styles.appContainer}>
      
      {isVisible ? (
        <View style={styles.viewContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={batLogo}
              style={{ 
                resizeMode: 'contain',
                height: 180,
              }}
            />
          </View>
          <View style={styles.btnContainer}>
            <BatButton onPress={handleVisibility} />
          </View>
        </View>
      ) : (
        <View style={styles.formContainer}>
          <BatForm />
        </View>
      )}
      
      <StatusBar style="light" />
    </View>
  );
}