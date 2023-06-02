import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import { Link } from '@react-navigation/native';

function LoginPage(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <Link to="/Register">
        <Text>Go to Register</Text>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default LoginPage;
