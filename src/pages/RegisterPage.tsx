import React from 'react';
import { Link } from '@react-navigation/native';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';

function RegisterPage(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <Link to="/Login">
        <Text>Go to Login</Text>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default RegisterPage;
