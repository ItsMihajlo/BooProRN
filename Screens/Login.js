/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login Page</Text>
      <View style={styles.login}>
        <Text style={styles.username}>Username:</Text>
        <TextInput
          placeholder="Enter Username..."
          style={styles.textinput}
          secureTextEntry={false}
          autoCorrect={false}></TextInput>
        <Text style={styles.username}>Password:</Text>
        <TextInput
          placeholder="Enter Password..."
          style={styles.textinput}
          secureTextEntry={true}
          autoCorrect={false}></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0099cc',
    alignItems: 'center',
  },
  header: {
    color: '#ffffff',
    alignItems: 'center',
    marginTop: 50,
    fontSize: 30,
    fontWeight: '700',
  },
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    fontWeight: '700',
    color: '#ffffff',
    fontSize: 20,
  },
  textinput: {
    borderWidth: 1,
    width: 200,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderColor: 'yellow',
    fontSize: 12,
  },
  button: {
    width: 120,
    height: 40,
    backgroundColor: 'green',
    marginTop: 10,
    borderColor: 'darkgreen',
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
export default Login;
