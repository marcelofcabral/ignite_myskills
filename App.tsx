import React from 'react';
import Home from './src/screens/Home';
import {StatusBar} from 'react-native';

const App = () => (
  <>
    <StatusBar barStyle={'dark-content'} />
    <Home />
  </>
);

export default App;
