import React from 'react'
import { View, Text } from 'react-native'
import { ScaledSheet, scale } from 'react-native-size-matters'
import colors from '../../../config/colors'
import Icon from 'react-native-vector-icons/FontAwesome5'

const TitleInfo = ({title, iconName}) => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.title}>
        <Icon name= {iconName} color={colors.primary} style={{ width: scale(20) }} size={scale(20)} />
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  )
}
const styles = ScaledSheet.create({
  titleContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: '10@vs',
    marginTop: '20@vs',
    justifyContent: 'space-between'
  },
  title: {
    flexDirection: 'row'
  },
  titleText: {
    color: colors.white,
    fontSize: '15@s',
    marginLeft: '10@s',
    fontWeight: 'bold'
  },
})
export default TitleInfo
