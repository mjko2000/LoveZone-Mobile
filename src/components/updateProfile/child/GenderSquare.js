import React from 'react'
import { View, Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { scale, ScaledSheet } from 'react-native-size-matters'
import colors from '../../../config/colors'
import Icon from 'react-native-vector-icons/Ionicons'

const GenderSquare = ({value, onSelect, icon, isActive}) => {
  return (
    <TouchableWithoutFeedback onPress = {() => onSelect(value)}>
      <View style = {[styles.container, {borderWidth: isActive ? scale(1): 0}]} >
        <Icon name = {icon} size = {scale(60)} color = {isActive ? colors.primary : colors.white} />
        <Text style = {styles.text}>{value}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '140@s',
    height: '140@s',
    backgroundColor: colors.textField,
    borderRadius: '10@s',
    borderWidth: '1@s',
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: colors.white
  }
})

export default GenderSquare
