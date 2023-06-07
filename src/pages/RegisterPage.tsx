import React from 'react';
import { Link } from '@react-navigation/native';
import { COLORS } from '../utils/utils';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import IntroButton from '../component/IntroButton';

function RegisterPage(): JSX.Element {
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
        <Text style={styles.description}>Gamemode</Text>
        <View style={styles.view}>
          <Icon
            name="user"
            style={styles.icon}
            color={COLORS['green']}
            size={24}
          />
          <Text style={styles.viewTitle}>Just one seeker</Text>
          <Text style={styles.description}>
            There is only one finder, once found the players are siply
            eliminated
          </Text>
        </View>
        <View style={styles.view}>
          <Icon
            name="eye"
            style={styles.icon}
            color={COLORS['green']}
            size={24}
          />
          <Text style={styles.viewTitle}>Hiders become seekers</Text>
          <Text style={styles.description}>
            Once they've been found, they becom seekers
          </Text>
        </View>
        <Text style={styles.description}>The finder</Text>
        <View style={styles.view}>
          <Icon
            name="rotate-right"
            style={styles.icon}
            color={COLORS['green']}
            size={24}
          />
          <Text style={styles.viewTitle}>Just one seeker</Text>
          <Text style={styles.description}>
            There is only one finder, once found the players are siply
            eliminated
          </Text>
        </View>
        <View style={styles.view}>
          <Icon
            name="bullhorn"
            style={styles.icon}
            color={COLORS['green']}
            size={24}
          />
          <Text style={styles.viewTitle}>Just one seeker</Text>
          <Text style={styles.description}>
            There is only one finder, once found the players are siply
            eliminated
          </Text>
        </View>
        <View style={styles.view}>
          <Icon
            name="eye-slash"
            style={styles.icon}
            color={COLORS['green']}
            size={24}
          />
          <Text style={styles.viewTitle}>Just one seeker</Text>
          <Text style={styles.description}>
            There is only one finder, once found the players are siply
            eliminated
          </Text>
        </View>
      </View>

      <IntroButton title={'Verify'} cb={() => {}} />
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
  viewTitle: {
    color: COLORS['text-dark'],
    fontWeight: '500',
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
    marginTop: 15,
  },

  icon: {
    backgroundColor: '00C27C1A',
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: 'center',
    verticalAlign: 'middle',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  view: {
    marginVertical: 20,
    flexDirection: 'row',
  },
});

export default RegisterPage;
