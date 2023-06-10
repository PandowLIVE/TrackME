import React, { useState } from 'react';
import { useNavigation, Link } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLORS } from '../utils/utils';
import IntroButton from '../component/IntroButton';
import RegisterSection from '../component/RegisterSection';
import {
  GAME_OPTION_GAMEMODE,
  GAME_OPTION_THE_FINDER,
} from '../utils/gameOptions';

type RootStackParamList = {
  Register: undefined;
  WaitingRoom: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

function RegisterPage(): JSX.Element {
  const navigation = useNavigation<NavigationProp>();
  const [options, setOptions] = useState({ gamemode: 0, finder: 0 });

  function submitRestAPI() {
    navigation.navigate('WaitingRoom');
  }

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.header}>
        <Link to="/Introduction">
          <Icon name="chevron-left" color={COLORS['text-dark']} size={24} />
        </Link>
        <Text style={styles.pageTitle}>Game Configuration</Text>
        <View style={{ width: 24 }}></View>
      </View>

      <ScrollView>
        <View>
          <Text style={styles.description}>Gamemode</Text>
          {GAME_OPTION_GAMEMODE.map((param, i) => (
            <RegisterSection
              key={i}
              icon={param.icon}
              title={param.title}
              description={param.description}
              selected={options.gamemode === i}
              setOptions={() => setOptions({ ...options, gamemode: i })}
            />
          ))}
        </View>
        <View>
          <Text style={styles.description}>The finder</Text>
          {GAME_OPTION_THE_FINDER.map((param, i) => (
            <RegisterSection
              key={i}
              icon={param.icon}
              title={param.title}
              description={param.description}
              selected={options.finder === i}
              setOptions={() => setOptions({ ...options, finder: i })}
            />
          ))}
        </View>
      </ScrollView>

      <IntroButton title={'Save Configuration'} cb={submitRestAPI} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pageTitle: {
    color: COLORS['text-dark'],
    fontWeight: 'bold',
    fontSize: 18,
  },
  title: {
    color: COLORS['text-dark'],
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
  },
  description: {
    color: COLORS['text-gray'],
    fontSize: 16,
    marginTop: 15,
    marginBottom: 5,
  },
});

export default RegisterPage;
