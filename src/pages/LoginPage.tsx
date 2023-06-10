import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation, Link } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLORS } from '../utils/utils';
import IntroButton from '../component/IntroButton';
import LoginInputCode from '../component/LoginInputCode';

type RootStackParamList = {
  Login: undefined;
  WaithingRoom: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

function LoginPage(): JSX.Element {
  const navigation = useNavigation<NavigationProp>();
  const [code, setCode] = useState('');
  const [focus, setFocus] = useState(0);

  useEffect(() => {
    const CleanCode = code.replace(/[^0-9]/g, '');
    setCode(CleanCode);

    setFocus(CleanCode.length);
  }, [code]);

  function submitRestAPI() {
    navigation.navigate('WaithingRoom');
  }

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
          {[0, 1, 2, 3].map((i) => (
            <LoginInputCode
              key={i}
              _index={i}
              _focus={focus}
              code={code}
              setCode={setCode}
            />
          ))}
        </View>
      </View>

      <IntroButton
        title={code.length === 4 ? 'Verify' : 'Complite Code'}
        enable={code.length === 4}
        cb={submitRestAPI}
      />
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
});

export default LoginPage;
