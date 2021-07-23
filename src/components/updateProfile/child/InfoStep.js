import React, { memo } from 'react'
import { View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import colors from '../../../config/colors'

const InfoStep = ({step, title}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.stepText}>{step}</Text>
      <Text style = {styles.title}>{title}</Text>
    </View>
  )
}
const styles = ScaledSheet.create({
  container: {
    paddingVertical: '20@vs',
    width: '100%'
  },
  stepText: {
    color: colors.primary,
    fontSize: '15@s'
  },
  title: {
    color: colors.primary,
    fontSize: '20@s',
    fontWeight: 'bold'
  }
})
export default memo(InfoStep)
