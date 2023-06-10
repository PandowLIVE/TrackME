import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation, Link } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import RegisterSection from '../component/RegisterSection';

import { COLORS } from '../utils/utils';
import WaitingSection from '../component/WaitingSection';

type RootStackParamList = {
  Login: undefined;
  WaitingRoom: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

function WaitingRoom(): JSX.Element {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.header}>
        <Link to="/Register">
          <Icon name="chevron-left" color={COLORS['text-dark']} size={24} />
        </Link>
        <Text style={styles.pageTitle}>Waiting room</Text>
        <View style={{ width: 24 }}></View>
        <Text style={styles.description}>Party invitation code</Text>
      </View>

      <WaitingSection />
      <WaitingSection />
      <WaitingSection />
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
  description: {
    color: COLORS['text-gray'],
    fontSize: 16,
    marginTop: 15,
    marginBottom: 5,
  },
});

export default WaitingRoom;
