import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import { Link } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

function IntroductionPage(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />

      <Link style={styles.navigate} to="/Login">
        <Text>
          <Icon name="bell" color={'red'} size={24} /> Go to Login
        </Text>
      </Link>
      <Link style={styles.navigate} to="/Register">
        <Text>Go to Register</Text>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navigate: {
    padding: 10,
    margin: 10,
    backgroundColor: 'gray',
  },
});

export default IntroductionPage;
