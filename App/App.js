import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import Routes from './Routes';
import Route from './Route';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 10}}>
      <NavigationContainer>
        <Route />
        {/* <Text style={{color: 'red', fontSize: 30}}>Hello</Text> */}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
