import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import HomeContainer from '../containers/HomeContainer';
import MessageContainer from '../containers/MessageContainer';
import MatchingContainer from '../containers/MatchingContainer';
import ProfileContainer from '../containers/ProfileContainer';
import colors from '../config/colors';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomTabar from '../components/custom/CustomTabar';
const Tab = createBottomTabNavigator();
const MainRoute = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabar {...props} />}
      tabBarOptions={{
        style: {
          backgroundColor: colors.header,
          borderTopWidth: 0,
        },
        keyboardHidesTabBar: true,
        activeTintColor: colors.primary,
        inactiveTintColor: colors.white,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{tabBarIcon: () => <Text>asd</Text>}}
      />
      <Tab.Screen name="Matching" component={MatchingContainer} />
      <Tab.Screen name="Message" component={MessageContainer} />
      <Tab.Screen name="Profile" component={ProfileContainer} />
    </Tab.Navigator>
  );
};

export default MainRoute;
