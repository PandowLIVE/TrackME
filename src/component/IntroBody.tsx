import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import IntroButton from './IntroButton';

import { COLORS } from '../utils/utils';

interface Props {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  localisation: object;
  TrackLocation: Function;
  SubmitIntroduction: Function;
}

const TITLES = [
  'Best Hide and Seek application',
  'Track your opponents wherever they are!',
  "It's up to you!",
];

const IntroBody: React.FC<Props> = ({
  step,
  setStep,
  username,
  setUsername,
  localisation,
  TrackLocation,
  SubmitIntroduction,
}) => {
  const [buttonText, setButtonText] = useState('Next');

  useEffect(() => {
    if (step === 1 && Object.keys(localisation).length !== 0) {
      setButtonText('Next');
    }
  }, [localisation]);

  function InputElement() {
    if (step === 0)
      return (
        <View style={{ width: '100%' }}>
          <TextInput
            style={styles.input}
            placeholder="Insert your username"
            value={username}
            onChangeText={setUsername}
          />
          <Text style={username.length < 5 ? { color: 'red' } : {}}>
            Minimum size 5 characters
          </Text>
        </View>
      );
    if (step === 1)
      return (
        <Text style={styles.description}>
          To do this we need the location of all the participants!
        </Text>
      );
    if (step === 2)
      return (
        <IntroButton title="Join Party" cb={() => buttonEffect('Login')} />
      );
  }

  function buttonEffect(option?: string) {
    if (step === 0) {
      if (username.length >= 5) {
        setStep(1);
        setButtonText('Authorize location');
      }
    } else if (step === 1) {
      if (Object.keys(localisation).length !== 0) {
        setStep(2);
        setButtonText('Create Party');
      } else TrackLocation();
    } else if (step === 2) SubmitIntroduction(option);
  }

  return (
    <View style={styles.body}>
      <View style={styles.hr}></View>
      <Text style={styles.title}>{TITLES[step]}</Text>

      {InputElement()}

      <IntroButton title={buttonText} cb={buttonEffect} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '45%',
    minHeight: 300,
    width: '100%',
    backgroundColor: COLORS.white,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  hr: {
    backgroundColor: COLORS.green,
    height: 4,
    width: 30,
    borderRadius: 50,
  },
  title: {
    color: COLORS['text-dark'],
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    minHeight: 75,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.white,
    color: COLORS['text-dark'],
    paddingHorizontal: 21,

    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS['text-gray'],
  },
  description: {
    color: COLORS['text-gray'],
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 15,
  },
});

export default IntroBody;
