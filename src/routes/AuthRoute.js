import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, HeaderStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';
import WelcomeContainer from '../containers/WelcomeContainer';
import LoginContainer from '../containers/LoginContainer';
import SignInContainer from '../containers/SignInContainer';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale } from 'react-native-size-matters';

const Stack = createStackNavigator();

const AuthRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.background,
        },
        headerStyle: {
          backgroundColor: colors.header,
          shadowColor: 'transparent',
          height: verticalScale(80)
        },
        headerTintColor: colors.white,
        headerTitleAlign: 'center',
        headerBackImage: () => (
          <Icon
            name="arrow-back-ios"
            size={scale(20)}
            color={colors.white}
            style={{ padding: scale(2) }}
          />
        ),
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
        headerStyleInterpolator: HeaderStyleInterpolators.forFade,
        cardStyleInterpolator: ({ current, next, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
                {
                  scale: next
                    ? next.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0.9],
                    })
                    : 1,
                },
              ],
            },
            overlayStyle: {
              opacity: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
              }),
            },
          };
        },
      }}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeContainer}
        options={{ header: () => null }}
      />
      {/* <Stack.Screen name="Login" component={LoginContainer} /> */}
      <Stack.Screen
        name="SignIn"
        component={SignInContainer}
        options={{ headerTitle: 'Sign In' }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoute;
