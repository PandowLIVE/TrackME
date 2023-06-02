import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [point, setPoint] = useState(0);

  useEffect(() => {
    if (point < 0) {
      setPoint(100);
    }
  }, [point]);

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <Text>test</Text>
      <Text style={styles.sectionTitle}>PandowLIVE</Text>
      <View style={styles.viewBorder}>
        <Text>Test</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setPoint(point + 1);
        }}
      >
        <Text style={{ color: 'white' }}>+1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setPoint(point - 5);
        }}
      >
        <Text style={{ color: 'white' }}>-5</Text>
      </TouchableOpacity>
      <Text>Tu as {point} points</Text>
      <Text>
        {point > 200
          ? 'Tu es riche ma gueule !'
          : 'Va faire la manche sale pauvre !'}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    padding: '5%',
    fontWeight: 'bold',
  },

  sectionTitle: {
    color: 'red',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  viewBorder: {
    borderColor: 'pink',
    borderWidth: 10,
    fontWeight: 'bold',
    width: '25%',
  },
});

export default App;

