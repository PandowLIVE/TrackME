import React, { useState, useEffect } from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
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
            uri: 'https://pandowlive.fr/assets/img/2.png',
          }}
        />
        <View style={styles.hr}></View>
        <Text style={styles.text}>Best Hide and Seek application</Text>
        <Text>To do this we need the location of all the particiapnts !</Text>
        <View style={styles.footer}>
          <View style={styles.bottomView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setPoint(point + 1);
              }}
            >
              <Text style={styles.textStyle}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#F2FCF8',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  hr: {
    borderColor: '#00C27C',
    borderWidth: 2.5,
    borderStartWidth: 150,
    marginVertical: 15,
    borderRadius: 50,
  },
  footer: {
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#00C27C',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
    borderRadius: 10,
    margin: 15,
  },
  input: {
    width: 335,
    height: 50,
    backgroundColor: 'white',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 10,
    borderColor: '#D9D9D9',
    borderWidth: 1,
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
    width: 461,
    height: 541,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default App;
