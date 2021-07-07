import React, { memo } from 'react'
import Slider from '@react-native-community/slider'
import { ScaledSheet } from 'react-native-size-matters'
import colors from '../../config/colors'

const CustomSlider = ({value,onValueChange,minimumValue,maximumValue}) => {
  return (
    <Slider
      value = {value}
      style = {styles.containder}
      minimumTrackTintColor = {colors.primary}
      thumbTintColor = {colors.white}
      onValueChange = {onValueChange}
      minimumValue = {minimumValue}
      maximumValue = {maximumValue}
    />
  )
}

const styles = ScaledSheet.create({
  containder: {
  }
})

export default memo(CustomSlider)
