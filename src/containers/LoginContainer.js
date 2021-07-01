import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';

const LoginContainer = (props) => {
  const {navigation} = props
  return (
    <View style = {styles.container}>
      <Text>LoginComponent</Text>
      <TouchableOpacity
        onPress = {() => navigation.replace("Main")}
      >
        <Text>Go to Main</Text>
      </TouchableOpacity>
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
