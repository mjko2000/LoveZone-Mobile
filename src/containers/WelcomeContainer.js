import React, { useEffect } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import ButtonFill from '../components/custom/ButtonFill';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../config/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../config/config';
import {signInFromTokenAPI} from '../api/authAPI'
import helpers from '../helpers';
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
          if(data.userInfo.profileUpdated) navigation.replace('Main');
            else navigation.replace('UpdateProfile');
        })
      }
      navigation.replace('Login');
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text>LoginComponent</Text>
      <ButtonFill
        text="Go to Main"
        onPress={() => navigation.replace('Login')}
        style={{
          backgroundColor: colors.primary,
          width: scale(300),
          marginVertical: verticalScale(10),
        }}
      />
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
