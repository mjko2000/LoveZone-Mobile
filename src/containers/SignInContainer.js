import React from 'react'
import { View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';

const SignInContainer = () => {
  return (
    <View style = {styles.container}>
      <Text>SignIn Component</Text>
    </View>
  )
}
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default SignInContainer
