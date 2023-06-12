import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text, View } from 'react-native';
import { useNavigation, Link } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLORS } from '../utils/utils';
import WaitingSection from '../component/WaitingSection';
import IntroButton from '../component/IntroButton';

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
          <Icon name="pencil" color={COLORS['text-dark']} size={24} />
        </Link>
        <Text style={styles.pageTitle}>Waiting room</Text>
        <View style={{ width: 24 }}></View>
      </View>

      <ScrollView>
        <View style={styles.codeSection}>
          <Text style={styles.description}>Party invitation code</Text>
          <View style={styles.codeView}>
            <Text style={styles.codeText}>2569</Text>
          </View>
        </View>

        <Text style={styles.description}>Player List</Text>
        <WaitingSection pseudo="BowEnder" distance={0} precision={9} />
        <WaitingSection pseudo="Pandow" distance={23} precision={1} />
        <WaitingSection pseudo="Jacky" distance={1993} precision={4} />
      </ScrollView>

      <IntroButton title="[0/2] Players ready" enable={false} cb={() => null} />
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
  codeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  codeView: {
    backgroundColor: '#6AB04C1A',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginTop: 15,
  },
  codeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.green,
  },
});

export default WaitingRoom;
