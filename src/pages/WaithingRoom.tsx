import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation, Link } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLORS } from '../utils/utils';

type RootStackParamList = {
  Login: undefined;
  WaithingRoom: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

function WaithingRoom(): JSX.Element {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.body}>
      <Text>SOON !</Text>
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
});

export default WaithingRoom;
