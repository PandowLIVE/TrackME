import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Link } from '@react-navigation/native';
import { COLORS } from '../utils/utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import IntroButton from '../component/IntroButton';

function LoginPage(): JSX.Element {
  return (
    <SafeAreaView style={styles.body}>
      <View>
        <View style={styles.header}>
          <Link to="/Introduction">
            <Icon name="chevron-left" color={COLORS['text-dark']} size={24} />
          </Link>
          <Text style={styles.pageTitle}>Join game</Text>
          <View style={{ width: 24 }}></View>
        </View>
        <Text style={styles.title}>Enter party code</Text>
        <Text style={styles.description}>
          Ask your friends for invitation code.
        </Text>
        <View style={styles.inputs}>
          <TextInput style={styles.input} keyboardType="numeric" />
          <TextInput style={styles.input} keyboardType="numeric" />
          <TextInput style={styles.input} keyboardType="numeric" />
          <TextInput style={styles.input} keyboardType="numeric" />
        </View>
      </View>

      <IntroButton title={'Verify'} cb={() => {}} />
    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get('window').width;
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
  },

  inputs: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginTop: 50,
  },

  input: {
    width: (windowWidth - 40) / 4 - 20,
    height: (windowWidth - 40) / 4 - 20,
    backgroundColor: COLORS.white,
    color: COLORS['text-dark'],
    textAlign: 'center',

    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS['text-gray'],
  },
});

export default LoginPage;
