import React, { useState } from 'react';
import { useNavigation, Link } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLORS } from '../utils/utils';
import IntroButton from '../component/IntroButton';
import {
  GAME_OPTION_GAMEMODE,
  GAME_OPTION_THE_FINDER,
} from '../utils/gameOptions';
import AdvantagesSection from '../component/AdvantagesSection';

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
        <Link to="/Game">
          <Icon name="chevron-left" color={COLORS['text-dark']} size={24} />
        </Link>
        <Text style={styles.pageTitle}>Game bonus</Text>
        <View style={{ width: 24 }}></View>
      </View>
      <View style={styles.codeSection}>
        <Text style={styles.description}>Your coins</Text>
        <View style={styles.codeView}>
          <Text style={styles.codeText}>3500🪙</Text>
        </View>
      </View>
      <ScrollView>
        <Text style={styles.description}>Advantages for the seeker</Text>
        <AdvantagesSection
          icon={'flag'}
          title={'Poop'}
          description={
            'Allows you to drop a poo on the ground visible on the map to everyone within a 10m radius. (Destructible by the seeker ( x35⭐))'
          }
          selected={true}
          setOptions={() => null}
        />
        <AdvantagesSection
          icon={'cloud'}
          title={'Cloud'}
          description={
            'Allows you to drop a cloud in the sky visible to everyone on the whole map. (30s x2.5⭐)'
          }
          selected={true}
          setOptions={() => null}
        />
        <AdvantagesSection
          icon={'bomb'}
          title={'Stick bomb'}
          description={
            'Activate a bomb on you visible by everyone, every second gives you points and at the end of the time if you are not discovered you win the points (60s x2.5⭐)'
          }
          selected={true}
          setOptions={() => null}
        />
        <Text style={styles.description}>Advantages for hidden</Text>
        <AdvantagesSection
          icon={'map'}
          title={'Ka-boom'}
          description={"Allows you to clear all the map's props. (Cost 500🪙)"}
          selected={true}
          setOptions={() => null}
        />
        <AdvantagesSection
          icon={'rss'}
          title={'Bip-bip'}
          description={
            'Allow you to hide the trajectory of the seeker (30s (Cost 500🪙))'
          }
          selected={true}
          setOptions={() => null}
        />
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
  codeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  codeView: {
    backgroundColor: '#ffb6001A',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginTop: 15,
  },
  codeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffc42e',
  },
});

export default RegisterPage;
