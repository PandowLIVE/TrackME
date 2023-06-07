import React from 'react';
import { Link } from '@react-navigation/native';
import { COLORS } from '../utils/utils';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function RegisterPage(): JSX.Element {
  return (
    <SafeAreaView>
      <Link to="/Introduction">
        <Icon name="chevron-left" color={COLORS['text-dark']} size={24} />
      </Link>
      <Text>Game configuration</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default RegisterPage;
