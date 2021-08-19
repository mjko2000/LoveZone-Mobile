import React, { useEffect } from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import ButtonFill from '../components/custom/ButtonFill';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../config/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../config/config';
import {signInFromTokenAPI} from '../api/authAPI'
import helpers from '../helpers';
import NavigationService from '../helpers/NavigationService';
const WelcomeContainer = props => {
  const {navigation} = props;
  
  useEffect(() => {
    AsyncStorage.getItem("accessToken")
    .then(token => {
      if(token){
        // navigation.navigate('Main');
        return signInFromTokenAPI(token).then(({data, error, message}) => {
          if(error) return alert(message)
          helpers.saveUserToken({accessToken: data.accessToken, isRemember: true})
          if(data.userInfo.profileUpdated) NavigationService.replace('Main');
            else NavigationService.replace('Login');
        })
      }
      NavigationService.replace('Login');
    })
  }, [])

  return (
    <View style={styles.container}>
      <ActivityIndicator size = 'large' color = {colors.primary} />
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default WelcomeContainer;
