import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import { Link } from '@react-navigation/native';

function RegisterPage(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <Link to="/Introduction">
        <Text>Go to Introduction</Text>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default RegisterPage;
