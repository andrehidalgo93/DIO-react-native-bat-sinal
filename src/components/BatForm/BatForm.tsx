import React, { useState } from 'react';
import { Alert, Image, ImageBackground, ScrollView, View } from 'react-native';

import batLogo from '../../../assets/bat-logo.png';
import batSignal from '../../../assets/bat-signal.png';
import { styles } from './BatFormStyles';
import { BatSendButton } from '../BatSendButton/BatSendButton';
import { BatInput } from '../BatInput/BatInput';

export function BatForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  function handlePressBtn() {
    Alert.alert(
      '🚨 Bat Sinal enviado 🚨',
      '🦇 Aguarde com segurança... 🦇',
      [
        {
          text: "Ok",
          onPress: () => setIsSuccess((oldValue: boolean) => !oldValue)
        }
      ]
    );
  } 
  return (
    <>
      {!isSuccess ? (
        <ScrollView>
          <View style={styles.logoContainer}>
          <Image
            source={batLogo}
            style={{
              resizeMode: 'contain',
              height: 60,
            }}
          />
          </View>
          <View style={styles.formControl}>
            <BatInput
              returnKeyLabel="Nome"
              placeholder='Digite seu nome...'
              autoCapitalize='words'
            />
            <BatInput
              returnKeyLabel="Telefone"
              placeholder='Digite seu número de telefone para contato...'
              inputMode='tel'
            />
            <BatInput
              returnKeyLabel="Localização"
              placeholder='Digite sua localização...'
              multiline
              numberOfLines={4}
            />
            <BatInput
              returnKeyLabel="Observação"
              placeholder='Digite observações...'
              multiline
              numberOfLines={4}
            />
          </View>
          <View style={styles.buttonContainer}>
            <BatSendButton onPress={handlePressBtn} />
          </View>
        </ScrollView>
      ) : (
        <ImageBackground
            source={batSignal}
            resizeMode='cover'
            style={{ flex: 1, justifyContent: 'center' }}
        />
      )}
    </>
  );
}