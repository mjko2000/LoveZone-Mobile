/* eslint-disable no-unused-vars */
import React from 'react';
import {TouchableNativeFeedback} from 'react-native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';
import WelcomeContainer from '../containers/WelcomeContainer';
import LoginContainer from '../containers/LoginContainer';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {scale, verticalScale} from 'react-native-size-matters';
import SignUpContainer from '../containers/signUp/SignUpContainer';
import UpdateProfileContainer from '../containers/signUp/UpdateProfileContainer';
import OTPContainer from '../containers/signUp/OTPContainer';

export let authNavigation = {};
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
          height: verticalScale(80),
        },
        headerTintColor: colors.white,
        headerTitleAlign: 'center',
        headerLeft: ({onPress}) => (
          <TouchableNativeFeedback onPress={onPress}>
            <Icon
              name="arrow-back-ios"
              size={scale(20)}
              color={colors.white}
              style={{padding: scale(12)}}
            />
          </TouchableNativeFeedback>
        ),
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
        headerStyleInterpolator: HeaderStyleInterpolators.forFade,
        cardStyleInterpolator: ({current, next, layouts}) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
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
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpContainer}
        options={{headerTitle: 'Sign Up'}}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfileContainer}
        options={{headerTitle: 'Update Profile'}}
      />
      <Stack.Screen
        name="OTP"
        component={OTPContainer}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoute;
