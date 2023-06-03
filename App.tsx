import React, { useState, useEffect } from 'react';
import {
  Image,
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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.containerMain}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://pandowlive.fr/assets/img/1.png',
          }}
        />
        <Text style={styles.text}>Best Hide and Seek application</Text>
        <View style={styles.bottomView}>
          <Text style={styles.textStyle}>Next</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    width: '93%',
    height: 50,
    backgroundColor: '#00C27C',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
    borderRadius: 10,
    margin: 15,
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
  text: {
    color: '#000000',
    fontWeight: '900',
    fontSize: 30,
    textAlign: 'center',
  },
  tinyLogo: {
    width: 408,
    height: 408,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default App;

