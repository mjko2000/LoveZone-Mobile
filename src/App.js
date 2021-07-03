import React from 'react'
import { View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthRoute from './routes/AuthRoute';
import MainRoute from './routes/MainRoute';
import { Provider } from 'react-redux';
import { store } from './redux';
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store = {store}>
      <StatusBar translucent backgroundColor='transparent' />
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="Auth" component={AuthRoute} />
          <Stack.Screen name="Main" component={MainRoute} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
