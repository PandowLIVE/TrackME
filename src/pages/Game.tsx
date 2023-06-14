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
  Advantages: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Game'>;

function Game(): JSX.Element {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.header}>
        <View style={{ width: 24 }}></View>
        <Text style={styles.pageTitle}>Game</Text>
        <View style={{ width: 24 }}></View>
      </View>
      <View style={styles.map}></View>
      <ScrollView>
        <View style={styles.bottomSection}>
          <View style={styles.iconShadow}>
            <Icon name="user" color={COLORS.green} size={30} />
          </View>
          <View style={styles.viewBottom}>
            <Text style={styles.viewTitle}>BowEnder</Text>
            <Text style={styles.description}>0/10 Joueurs found</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.iconShadow}>
              <Icon name="plus" color={COLORS.green} size={24} />
            </View>
            <Link to="/Advantages">
              <View style={styles.iconShadow}>
                <Icon name="chevron-right" color={COLORS.green} size={24} />
              </View>
            </Link>
          </View>
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
  row: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  viewTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    color: COLORS.white,
    fontSize: 16,
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
    flexDirection: 'row',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    marginTop: 10,
    padding: 20,
    bottom: 0,
  },
  iconShadow: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 100,
    marginHorizontal: 5,
  },
  viewBottom: {
    marginHorizontal: 20,
  },
});

export default Game;
