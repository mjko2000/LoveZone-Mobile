import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { scale, ScaledSheet } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../config/colors'
const InfoIconButton = ({ }) => {
  return (
    <TouchableWithoutFeedback
      onPress = {() => {}}
    >
      <View style = {styles.container}>
        <Icon
          name='person'
          size = {scale(30)}
          color = {'white'}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}
const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    top: -scale(30),
    right: scale(20),
    backgroundColor: colors.primary,
    width: scale(60),
    height: scale(60),
    borderRadius: scale(30),
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
  }
})
export default InfoIconButton
