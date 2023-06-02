import React, { useState } from 'react';
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
        <Text style={{ color: 'white' }}>AHHH DU BLEU !!!!!!</Text>
      </TouchableOpacity>
      <Text>{point}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    padding: 50,
  },

  sectionTitle: {
    color: 'red',
    textDecorationLine: 'underline',
  },

  viewBorder: {
    borderColor: 'pink',
    borderWidth: 3,
    width: 300,
  },
});

export default App;

