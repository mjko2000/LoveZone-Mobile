import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import ButtonFill from '../components/custom/ButtonFill';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const LoginContainer = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text>LoginComponent</Text>
      <ButtonFill
        text="Go to Main"
        onPress={() => navigation.push("Main")}
        style={{
          backgroundColor: '#ffb83d',
          width: scale(300),
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
});
export default LoginContainer
