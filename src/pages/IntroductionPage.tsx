import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Geolocation from '@react-native-community/geolocation';
import IntroBody from '../component/IntroBody';

import { COLORS } from '../utils/utils';
import IntroImage from '../component/IntroImage';

type RootStackParamList = {
  Introduction: undefined;
  Login: undefined;
  Register: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Introduction'>;

function IntroductionPage(): JSX.Element {
  const navigation = useNavigation<NavigationProp>();
  const [step, setStep] = useState(0);
  const [username, setUsername] = useState('');
  const [localisation, setLocalisation] = useState({});

  function TrackLocation() {
    Geolocation.watchPosition(
      (info) => {
        const { latitude, longitude } = info?.coords;
        setLocalisation({ latitude, longitude });
      },
      () => null,
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
        distanceFilter: 10,
      }
    );
  }

  function SubmitIntroduction(option?: string) {
    if (option === 'Login') navigation.navigate('Login');
    else navigation.navigate('Register');
  }

  return (
    <SafeAreaView style={styles.container}>
      <IntroImage step={step} />

      <IntroBody
        step={step}
        setStep={setStep}
        username={username}
        setUsername={setUsername}
        localisation={localisation}
        TrackLocation={TrackLocation}
        SubmitIntroduction={SubmitIntroduction}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS['bg-intro'],
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default IntroductionPage;
