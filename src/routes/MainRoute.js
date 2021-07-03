import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import SettingContainer from '../containers/SettingContainer';
import SwipeContainer from '../containers/SwipeContainer';
import colors from '../config/colors';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons'
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}
const HomeRoute = () => {
  return (
    <Tab.Navigator
      screenOptions = {{
        
      }}
      tabBarOptions = {{
        style: {
          backgroundColor: colors.header,
          borderTopWidth: 0
        },
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen name="Swipe" component={SwipeContainer}  />
      <Tab.Screen name="Profile" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingContainer} />
    </Tab.Navigator>
  )
}

export default HomeRoute
