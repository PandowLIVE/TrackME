import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLORS } from '../utils/utils';

interface Props {
  pseudo: string;
  distance: number;
  precision: number;
  owner?: boolean;
}

const WaitingSection: React.FC<Props> = ({
  pseudo,
  distance,
  precision,
  owner = false,
}) => {
  return (
    <View style={styles.view}>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={[styles.iconBorder, styles.iconShadow, { marginRight: 20 }]}
        >
          <Text style={styles.textIcon}>{pseudo.charAt(0).toUpperCase()}</Text>
        </View>
        <View>
          <Text style={styles.title}>{pseudo}</Text>
          <Text style={styles.description}>
            Is <Text style={{ fontWeight: 'bold' }}>{distance + 'm'}</Text>{' '}
            aways
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        {owner && (
          <View style={styles.iconBorder}>
            <Icon name="lock" color={COLORS['green']} size={24} />
          </View>
        )}
        <View style={styles.iconBorder}>
          <Icon name="globe" color={COLORS['green']} size={24} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#6AB04C1A',
    borderRadius: 10,
    marginBottom: 15,
  },
  iconShadow: {
    backgroundColor: COLORS.green,
  },
  iconBorder: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.green,
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  title: {
    color: COLORS['text-dark'],
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: COLORS['text-gray'],
    fontSize: 16,
  },
  textIcon: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WaitingSection;

