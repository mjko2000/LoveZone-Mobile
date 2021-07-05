import React from 'react'
import { memo } from 'react';
import { Button, TouchableNativeFeedback, Text, ActivityIndicator, View } from 'react-native'
import { scale, ScaledSheet } from 'react-native-size-matters';
import colors from '../../config/colors';

const ButtonFill = ({text, style, onPress, loading, disabled}) => {
  return (
    <TouchableNativeFeedback disabled = {disabled} onPress = {onPress}>
      <View style = {[styles.container, style, loading && {backgroundColor: colors.gray}]}>
        {loading ? 
        <ActivityIndicator color = {colors.primary} size = {'large'} /> : 
        <Text style = {styles.text}>{text}</Text>}
      </View>
    </TouchableNativeFeedback>
  )
}
const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '12@ms',
    height: '45@vs',
    borderRadius: '5@ms',
  },
  text: {
    color: 'white',
    fontSize: scale(14),
    fontWeight: 'bold'
  }
});
export default memo(ButtonFill)
