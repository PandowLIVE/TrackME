import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Dimensions, TextInput } from 'react-native';
import { COLORS } from '../utils/utils';

interface Props {
  _index: number;
  _focus: number;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}

const LoginInputCode: React.FC<Props> = ({ _index, _focus, code, setCode }) => {
  const [blur, setBlur] = useState(false);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (_index === _focus)
      if (inputRef.current) {
        inputRef.current.focus();
      }
  }, [_focus]);

  function editCode(value: string) {
    let numbers = code?.split('') || '';
    numbers[_index] = value;
    setCode(numbers.join(''));
  }

  function removeLastValue() {
    let numbers = code?.split('');
    numbers.pop();
    setCode(numbers.join(''));
  }

  return (
    <TextInput
      ref={inputRef}
      style={[
        styles.input,
        blur && { borderWidth: 3, borderColor: COLORS.green },
      ]}
      keyboardType="numeric"
      value={code?.split('')[_index]}
      onBlur={() => setBlur(false)}
      onFocus={() => setBlur(true)}
      onChangeText={(text) => editCode(text)}
      onKeyPress={(e) => {
        if (e.nativeEvent.key === 'Backspace') removeLastValue();
      }}
    />
  );
};

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  input: {
    width: (windowWidth - 40) / 4 - 20,
    height: (windowWidth - 40) / 4 - 20,
    backgroundColor: COLORS.white,
    color: COLORS['text-dark'],
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',

    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS['text-gray'],
  },
});

export default LoginInputCode;
