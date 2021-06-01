/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {Text, View} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import Login from './Screens/Login';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Login />;
};
export default App;
