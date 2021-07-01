import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthRoute from './src/routes/AuthRoute';
import MainRoute from './src/routes/MainRoute';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode = 'none'>
        <Stack.Screen name="Auth" component={AuthRoute} />
        <Stack.Screen name="Main" component={MainRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
