import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import ButtonFill from '../components/custom/ButtonFill';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const WelcomeContainer = (props) => {
  const {navigation} = props
  return (
    <View style = {styles.container}>
      <Text>
        Wellcome Screen
      </Text>
      <ButtonFill 
        text = "Go to Login"
        onPress = {() => navigation.push("Login")}
        style = {{
          backgroundColor: '#ffb83d',
          width: '80%',
          marginVertical: verticalScale(10)
        }}
      />
      <ButtonFill 
        text = "Go to SignIn"
        onPress = {() => navigation.push("SignIn")}
        style = {{
          backgroundColor: '#ffb83d',
          width: '80%',
          marginVertical: verticalScale(10)
        }}
      />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  teasat: {
      width: '100@s', // = scale(100)
      height: '200@vs', // = verticalScale(200)
      padding: '2@msr', // = Math.round(moderateScale(2))
      margin: 5
  },
  row: {
      padding: '10@ms0.3', // = moderateScale(10, 0.3)
      width: '50@ms', // = moderateScale(50)
      height: '30@mvs0.3' // = moderateVerticalScale(30, 0.3)
  }
});

export default WelcomeContainer