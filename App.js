import React from 'react';
import firebase from './src/services/firebaseConnection';
import 'react-native-gesture-handler';
import { StatusBar} from 'react-native';
import Routes from './src/routes/index';

import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/auth';


const App = () => {

  return (
    <NavigationContainer>

      <AuthProvider>
       <StatusBar backgroundColor="#131313" barStyle='light-content'/> 
        <Routes />
      </AuthProvider>

    </NavigationContainer>
  );
};

export default App;
