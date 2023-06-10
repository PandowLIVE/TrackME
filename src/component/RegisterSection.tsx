import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLORS } from '../utils/utils';

interface Props {
  icon: string;
  title: string;
  description: string;
  selected: boolean;
  setOptions: () => void;
}

const RegisterSection: React.FC<Props> = ({
  icon,
  title,
  description,
  selected,
  setOptions,
}) => {
  return (
    <TouchableOpacity
      style={[styles.view, selected && styles.selected]}
      activeOpacity={0.5}
      onPress={() => setOptions()}
    >
      <View style={styles.iconShadow}>
        <Icon name={icon} color={COLORS['green']} size={24} />
      </View>
      <View style={{ width: '75%' }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  selected: {
    backgroundColor: '#00C27C1A',
    borderColor: COLORS.green,
    borderWidth: 1,
    padding: 9,
    borderRadius: 15,
  },
  iconShadow: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00C27C1A',
    borderRadius: 100,
  },
  title: {
    color: COLORS['text-dark'],
    fontSize: 18,
  },
  description: {
    color: COLORS['text-gray'],
    fontSize: 16,
    marginTop: 10,
  },
});

export default RegisterSection;
