import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLORS } from '../utils/utils';

interface Props {
  pseudo: string;
  zone: number;
  temperature: number;
}

const GameSection: React.FC<Props> = ({ pseudo, zone, temperature }) => {
  return (
    <View style={styles.view}>
      <View>
        <View style={styles.iconShadow}>
          <Icon name="user" color={COLORS.white} size={35} />
        </View>
        <View style={styles.borderDot}></View>
        <Icon
          style={styles.icon}
          name="caret-up"
          color={COLORS['green']}
          size={50}
        />
      </View>
      <View>
        <Text>{pseudo}</Text>
        <Text>Hidden / Seeker</Text>
        <Text>Map zone {zone}m</Text>
        <Text>Temperature {temperature}°C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 15,
    backgroundColor: 'white',
    maxHeight: 200,
  },
  borderDot: {
    borderLeftColor: COLORS.green,
    borderStyle: 'dashed',
    borderLeftWidth: 1.5,
    height: '30%',
    marginHorizontal: '17.5%',
    marginVertical: 5,
  },
  iconShadow: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6AB04C',
    borderRadius: 100,
  },
  icon: {
    marginLeft: 11,
  },
});

export default GameSection;
