import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import IntroductionPage from './src/pages/IntroductionPage';
import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import WaitingRoom from './src/pages/WaitingRoom';
import Game from './src/pages/Game';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Introduction"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Introduction" component={IntroductionPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Game" component={Game} />

        <Stack.Screen name="WaitingRoom" component={WaitingRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
