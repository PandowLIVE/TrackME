import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Link } from '@react-navigation/native';
import { COLORS } from '../utils/utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import IntroButton from '../component/IntroButton';

interface Props {
  partyCode: string;
}

function LoginPage(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Link to="/Introduction">
          <Icon
            style={styles.icon}
            name="chevron-left"
            color={COLORS['text-dark']}
            size={24}
          />
        </Link>
        <Text style={styles.center}>Join game</Text>
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
      <View style={styles.body}>
        <IntroButton title={'Verify'} cb={() => {}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '45%',
    minHeight: 300,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  title: {
    color: COLORS['text-dark'],
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    minHeight: 75,
  },
  description: {
    color: COLORS['text-gray'],
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 15,
  },
  header: {
    padding: 10,
    flexDirection: 'row',
  },

  inputs: {
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '60%',
    flexDirection: 'row',
  },

  center: {
    color: COLORS['text-dark'],
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    width: '100%',
    paddingRight: 24,
  },

  icon: {
    justifyContent: 'flex-start',
  },

  input: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    color: COLORS['text-dark'],
    paddingHorizontal: 21,

    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS['green'],
  },
});

export default LoginPage;
