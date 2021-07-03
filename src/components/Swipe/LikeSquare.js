import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { scale, verticalScale } from 'react-native-size-matters'
import colors from '../../config/colors'
export const LikeSquare = memo(({ x }) => {
  const animStyle = useAnimatedStyle(() => ({
    opacity: interpolate(x.value, [-200, -30], [1, 0])
  }))
  return (
    <Animated.View style={[styles.container, animStyle]}>
      <Text style={styles.text}>Like</Text>
    </Animated.View>
  )
})

export const NopeSquare = memo(({ x }) => {
  const animStyle = useAnimatedStyle(() => ({
    opacity: interpolate(x.value, [30, 200], [0, 1])
  }))
  return (
    <Animated.View style={[styles.container, {borderColor: colors.nope}, animStyle]}>
      <Text style={[styles.text, {color: colors.nope}]}>Nope</Text>
    </Animated.View>
  )
})

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    borderWidth: scale(2),
    borderColor: colors.like,
    width: scale(150),
    height: scale(70),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: verticalScale(200),
    transform: [{rotateZ: '-0.5rad'}]
  },
  text: {
    color: colors.like,
    fontWeight: 'bold',
    fontSize: scale(30)
  }
})