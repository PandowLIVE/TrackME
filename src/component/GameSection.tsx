import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLORS } from '../utils/utils';

type Information = {
  title: string;
  value: string;
};
interface Props {
  pseudo: string;
  isFound?: boolean;
  informations: Information[];
}

const GameSection: React.FC<Props> = ({
  pseudo,
  isFound = false,
  informations,
}) => {
  return (
    <View style={styles.view}>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.iconShadow}>
          <Icon name="user" color={COLORS.white} size={30} />
        </View>
        <View
          style={[
            styles.borderDot,
            {
              height: 20 + 40 * informations.length,
            },
          ]}
        ></View>
        <Icon name="caret-up" color={COLORS['green']} size={40} />
      </View>
      <View style={styles.datas}>
        <Text style={[styles.pseudoText, styles.rowText]}>{pseudo}</Text>
        <Text style={[styles.statusText, styles.rowText]}>
          {isFound ? 'Found' : 'Hidden'}
        </Text>

        {informations.map((info, i) => (
          <View key={i} style={styles.rowText}>
            <Text>{info.title}</Text>
            <Text style={{ fontWeight: 'bold' }}>{info.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    padding: 15,
    minHeight: 130,
  },
  datas: {
    width: '70%',
  },
  borderDot: {
    borderLeftColor: COLORS.orange,
    borderStyle: 'dashed',
    borderLeftWidth: 1.5,
  },
  iconShadow: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6AB04C',
    borderRadius: 100,
  },
  pseudoText: {
    fontSize: 19,
    color: COLORS['text-dark'],
  },
  statusText: {
    fontSize: 19,
    color: COLORS['text-dark'],
    fontWeight: 'bold',
  },
  rowText: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
});

export default GameSection;

