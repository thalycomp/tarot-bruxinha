/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#401650" />
    <Routes />
  </>
);

export default App;
