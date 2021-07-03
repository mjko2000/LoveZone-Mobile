/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';
import AuthRoute from './routes/AuthRoute';
import MainRoute from './routes/MainRoute';
import {Provider} from 'react-redux';
import {store} from './redux';
import colors from './config/colors';
import {scale} from 'react-native-size-matters';
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1, backgroundColor: colors.background}}>
        <StatusBar translucent backgroundColor="transparent" />
        <NavigationContainer>
          <Stack.Navigator
            headerMode="none"
            screenOptions={{
              cardStyle: {
                backgroundColor: colors.background,
              },
              gestureDirection: 'horizontal',
              transitionSpec: {
                open: TransitionSpecs.TransitionIOSSpec,
                close: TransitionSpecs.TransitionIOSSpec,
              },
              HeaderStyleInterpolators: HeaderStyleInterpolators.forFade,
              cardStyleInterpolator: ({current, next, layouts, closing}) => {
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
            <Stack.Screen name="Auth" component={AuthRoute} />
            <Stack.Screen name="Main" component={MainRoute} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default App;
