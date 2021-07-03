import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeContainer} from '../containers/index';

const Tab = createBottomTabNavigator();
const MainRoute = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeContainer} />
      {/* <Tab.Screen name="Profile" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingContainer} /> */}
    </Tab.Navigator>
  );
};

export default MainRoute;
