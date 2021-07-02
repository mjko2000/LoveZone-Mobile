import React from 'react'
import { View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthRoute from './src/routes/AuthRoute';
import MainRoute from './src/routes/MainRoute';

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style = {{flex: 1}}>
      <StatusBar translucent backgroundColor = 'transparent' />
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="Auth" component={AuthRoute} />
          <Stack.Screen name="Main" component={MainRoute} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App
