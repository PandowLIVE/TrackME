import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation, Link } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLORS } from '../utils/utils';
import { ScrollView } from 'react-native-gesture-handler';
import GameSection from '../component/GameSection';

type RootStackParamList = {
  Game: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Game'>;

function Game(): JSX.Element {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.header}>
        <Link to="/WaitingRoom">
          <Icon name="chevron-left" color={COLORS['text-dark']} size={24} />
        </Link>
        <Text style={styles.pageTitle}>Game</Text>
        <View style={{ width: 24 }}></View>
      </View>
      <View style={styles.map}></View>
      <ScrollView>
        <View style={styles.bottomSection}>
          <Text style={styles.viewTitle}>Test</Text>
        </View>
        <GameSection
          pseudo={'PandowLIVE'}
          informations={[
            { title: 'Zonne', value: '105m' },
            { title: 'Temperature', value: '20°' },
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
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
  viewTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    color: COLORS['text-gray'],
    fontSize: 16,
    marginTop: 15,
    marginBottom: 5,
  },
  map: {
    backgroundColor: 'blue',
    width: '100%',
    height: '50%',
  },
  bottomSection: {
    backgroundColor: COLORS.green,
    width: '100%',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    marginTop: 10,
    padding: 20,
    bottom: 0,
  },
});

export default Game;

