import React from 'react'
import { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { scale, ScaledSheet } from 'react-native-size-matters';

const ButtonFill = (props) => {
  const {text, style, onPress} = props
  return (
    <TouchableOpacity onPress = {onPress} style = {{...styles.container, ...style}}>
      <Text style = {styles.text} >{text}</Text>
    </TouchableOpacity>
  )
}
const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: '12@ms',
    paddingHorizontal: '15@ms',
    borderRadius: '5@ms',
    marginHorizontal: 12
  },
  text: {
    color: 'white',
    fontSize: scale(14),
    fontWeight: 'bold'
  }
});
export default memo(ButtonFill)
