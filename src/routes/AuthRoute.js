import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeContainer from '../containers/WelcomeContainer';
import LoginContainer from '../containers/LoginContainer';
import SignInContainer from '../containers/SignInContainer';

const Stack = createStackNavigator();

const AuthRoute = () => {
  return (
    <Stack.Navigator headerMode = 'none'>
      <Stack.Screen name="Home" component={WelcomeContainer} />
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="SignIn" component={SignInContainer} />
    </Stack.Navigator>
  )
}

export default AuthRoute
