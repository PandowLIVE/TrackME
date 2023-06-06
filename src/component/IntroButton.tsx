import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { COLORS } from '../utils/utils';

interface Props {
  title: string;
  cb: () => void;
}

const IntroButton: React.FC<Props> = ({ title, cb }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        (title === 'Authorize location' ||
          title === 'Location recovery...') && {
          backgroundColor: COLORS.orange,
        },
      ]}
      activeOpacity={0.8}
      onPress={() => cb()}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 60,
    paddingVertical: 15,
    backgroundColor: COLORS.green,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS['text-white'],
    fontSize: 20,
  },
});

export default IntroButton;
