/* eslint-disable no-unused-vars */
import React from 'react';
import {View} from 'react-native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Modal1 = () => {
  return(
    <View style = {{flex: 1, backgroundColor: 'red'}} />
  )
}
const Modal2 = () => {
  return(
    <View style = {{flex: 1, backgroundColor: 'blue'}} />
  )
}

const ModalRoute = () => {
  
  return (
    <Stack.Navigator
      mode = 'modal'
      headerMode = 'none'
    >
      <Stack.Screen
        name="Modal1"
        component={Modal1}
      />
      <Stack.Screen
        name="Modal2"
        component={Modal2}
      />
    </Stack.Navigator>
  );
};

export default ModalRoute;
