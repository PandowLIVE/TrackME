import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLORS } from '../utils/utils';
import WaithingRoom from '../pages/WaitingRoom';

interface Props {}

const WaitingSection: React.FC<Props> = ({}) => {
  return (
    <TouchableOpacity
      style={styles.view}
      activeOpacity={0.5}
      onPress={() => {}}
    >
      <View style={styles.iconShadow}>
        <Text style={styles.textIcon}>P</Text>
      </View>
      <View style={{ width: '55%' }}>
        <Text style={styles.title}>PandowLIVE</Text>
        <Text style={styles.description}>
          <Text>Is </Text>
          <Text style={{ fontWeight: 'bold' }}>54</Text>
          <Text> meters aways</Text>
        </Text>
      </View>
      <View style={styles.iconBorder}>
        <Icon name="lock" color={COLORS['green']} size={24} />
      </View>
      <View style={styles.iconBorder}>
        <Icon name="globe" color={COLORS['green']} size={24} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#6AB04C1A',
    borderRadius: 10,
  },
  iconShadow: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.green,
    borderRadius: 10,
  },
  iconBorder: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.green,
    borderWidth: 2,
    borderRadius: 10,
  },
  title: {
    color: COLORS['text-dark'],
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 25,
  },
  description: {
    color: COLORS['text-gray'],
    fontSize: 16,
    paddingLeft: 25,
  },
  textIcon: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WaitingSection;
