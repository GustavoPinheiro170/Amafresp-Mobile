import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/router';
import { UserContextProvider } from './src/UserContext';




const App = () => {

  return (
    <UserContextProvider>

      <StatusBar style='auto'/>
      <Routes />

    </UserContextProvider>

  );
}

export default App;

