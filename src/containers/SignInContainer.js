import React, { useEffect } from 'react'
import { View, Text, ScrollView, Dimensions, Keyboard } from 'react-native'
import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import TextField from '../components/custom/TextField';
import Animated, { withSpring ,useSharedValue, useAnimatedStyle, withDecay } from 'react-native-reanimated';
import colors from '../config/colors';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window')
const SignInContainer = () => {
  const scaleAnim = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      transform: [
        { translateY: -(scaleAnim.value) },
      ]
    };
  });
  useEffect(() => {
    const onKeyboardShow = (e) => {
      scaleAnim.value = withSpring(e.endCoordinates.height/2)
    }
    const onKeyboardHide = () => {
      scaleAnim.value = withSpring(0)
    }
    Keyboard.addListener('keyboardDidShow', onKeyboardShow)
    Keyboard.addListener('keyboardDidHide', onKeyboardHide)
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow')
      Keyboard.removeAllListeners('keyboardDidHide')
    }
  },[])
  return (
    <Animated.ScrollView
      contentContainerStyle = {styles.container}
      scrollEnabled = {false}
    >
      <Animated.View style = {animatedStyles} >
        <Text style = {{color: 'white'}}>SignIn Component</Text>
        <TextField
          placeholder = "Email"
          style = {{
            marginBottom: verticalScale(12)
          }}
        />
        <TextField 
          placeholder = 'Password'
        />
      </Animated.View>
    </Animated.ScrollView>
  )
}
const styles = ScaledSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    // backgroundColor: colors.background
  }
});
export default SignInContainer
