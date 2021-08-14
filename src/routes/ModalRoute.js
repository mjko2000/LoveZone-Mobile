/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Text} from 'react-native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';
import ChatScreen from '../components/message/ChatScreen';
import DetailScreen from '../components/modals/DetailScreen';
import Header from '../components/modals/Header';

const Stack = createStackNavigator();

const Modal1 = () => {
  return <View style={{flex: 1, backgroundColor: 'red'}} />;
};

const ModalRoute = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="Modal1" component={Modal1} />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{header: () => <Header />}}
      />
    </Stack.Navigator>
  );
};

export default ModalRoute;
