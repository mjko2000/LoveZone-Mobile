import React, { useEffect } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import {
  createStackNavigator,
} from '@react-navigation/stack';
import ButtonFill from '../../components/custom/ButtonFill';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../config/colors';
import { scale, verticalScale } from 'react-native-size-matters';
import {NavigationAction} from '@react-navigation/native'
const Stack = createStackNavigator();
let profileNavigation = {goBack: () => {}}
const Step1 = ({ navigation }) => {
  useEffect(() => profileNavigation = navigation,[])
  return (

    <ButtonFill
      text="ASD"
      onPress={() => navigation.navigate("ProfileStep2")}
      style={{
        backgroundColor: 'red'
      }}
    />
  )
}
const Step2 = ({ }) => {
  return (
    <View></View>
  )
}
const UpdateProfileContainer = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableNativeFeedback
          onPress = {() => {profileNavigation.goBack('UpdateProfile')}}
        >
          <Icon
            name="arrow-back-ios"
            size={scale(20)}
            color={colors.white}
            style={{ padding: scale(12) }}
          />
        </TouchableNativeFeedback>
      ),
      headerRight: () => (
        <TouchableNativeFeedback>
          <Text
            style={{
              color: colors.primary,
              padding: scale(10),
              marginTop: verticalScale(5),
            }}>
            Next
          </Text>
        </TouchableNativeFeedback>
      ),
    })
  }, [])
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.background
        },
        cardStyleInterpolator: ({ current, next, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: next ? next.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -layouts.screen.width],
                  }) : current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  })
                },
              ],
            },
          };
        },
      }}
    >
      <Stack.Screen
        name="ProfileStep1"
        component={Step1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileStep2"
        component={Step2}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default UpdateProfileContainer