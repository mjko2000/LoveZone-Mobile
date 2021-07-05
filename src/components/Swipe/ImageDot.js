import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import colors from '../../config/colors'

const ImageDot = ({ length, activeIndex }) => {
  const [views,] = useState(new Array(length).fill('s'))
  return (
    <View style={style.container}>
      {views.map((item, index) =>
        <View style={[style.dot, {
          marginLeft: index === 0 ? 0 : 12,
          backgroundColor: index === activeIndex ? colors.white : 'transparent'
        }]} />
      )}
    </View>
  )
}

const style = ScaledSheet.create({
  container: {
    position: 'absolute',
    top: '5@s',
    width: '100%',
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  dot: {
    width: '10@s',
    height: '5@vs',
    borderRadius: '2.5@s',
    borderWidth: 1,
    borderColor: colors.white
  }
})

export default ImageDot
