import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Home from './src/screens/Home';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Home />
    </>
  );
};

export default App;
