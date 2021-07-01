import React from 'react'
import { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';

const ButtonFill = (props) => {
  const {text, style, onPress} = props
  return (
    <TouchableOpacity onPress = {onPress} style = {{...styles.container, ...style}}>
      <Text style = {{color: 'white'}} >{text}</Text>
    </TouchableOpacity>
  )
}
const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: '15@ms',
    paddingHorizontal: '15@ms',
    borderRadius: '5@ms',
    marginHorizontal: 12
  },
});
export default memo(ButtonFill)
