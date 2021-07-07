import React, { useEffect } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import {
  createStackNavigator,
} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../config/colors';
import { scale, verticalScale } from 'react-native-size-matters';
import Step1 from '../../components/updateProfile/Step1';
import Step2 from '../../components/updateProfile/Step2';
const Stack = createStackNavigator();
export let profileNavigation = { goBack: () => { } }
const UpdateProfileContainer = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableNativeFeedback
          onPress={() => { profileNavigation.goBack() }}
        >
          <Icon
            name="arrow-back-ios"
            size={scale(20)}
            color={colors.white}
            style={{ padding: scale(12) }}
          />
        </TouchableNativeFeedback>
      ),
    })
  }, [])
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => {
          profileNavigation = props.navigation
          return null
        },
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
        // options={{
        //   headerShown: false,
        // }}
      />
      <Stack.Screen
        name="ProfileStep2"
        component={Step2}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default UpdateProfileContainer