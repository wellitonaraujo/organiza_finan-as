import React from 'react';
// import firebase from './src/services/firebaseConnection';
import 'react-native-gesture-handler';
import { StatusBar, View} from 'react-native';
import Routes from './src/routes/index';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {

  return (
    <NavigationContainer>
     <StatusBar backgroundColor="#131313" barStyle='light-content'/>
     
     <Routes />
    </NavigationContainer>
  );
};

export default App;
