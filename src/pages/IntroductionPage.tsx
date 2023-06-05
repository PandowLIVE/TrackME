import React, { useState, useEffect } from 'react';
import { Link } from '@react-navigation/native';
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

function IntroductionPage(): JSX.Element {
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
        <View style={styles.footer}>
          <View style={styles.hr}></View>
          <Text style={styles.text}>Best Hide and Seek application</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Insert your username"
            />
          </View>
          <View style={styles.bottomView}>
            <Link style={styles.button} to="/Register">
              <TouchableOpacity style={styles.button}>
                <Link to="/Register">
                  <Text style={styles.textStyle}>Next</Text>
                </Link>
              </TouchableOpacity>
            </Link>
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
    borderColor: '#6AB04C',
    borderWidth: 2.5,
    borderStartWidth: 150,
    marginBottom: 15,
    borderRadius: 50,
  },
  footer: {
    minHeight: '45%',
    height: '45%',
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#6AB04C',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
    borderRadius: 10,
    margin: 27,
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
    textAlign: 'center',
  },
  text: {
    color: '#000000',
    fontWeight: '900',
    fontSize: 30,
    textAlign: 'center',
  },
  tinyLogo: {
    marginBottom: '75%',
    width: 408,
    height: 408,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default IntroductionPage;
