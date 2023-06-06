import React, { useState, useEffect } from 'react';
import { StyleSheet, Keyboard, Image, View } from 'react-native';

interface Props {
  step: number;
}

const IntroImage: React.FC<Props> = ({ step }) => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [imageSource, setImageSource] = useState(
    require('./../asset/Introduction_1.png')
  );

  useEffect(() => {
    if (step === 1) setImageSource(require('./../asset/Introduction_2.png'));
    if (step === 2) setImageSource(require('./../asset/Introduction_3.png'));
  }, [step]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  if (!keyboardVisible)
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={imageSource} />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    height: '55%',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 300,
  },
});

export default IntroImage;
