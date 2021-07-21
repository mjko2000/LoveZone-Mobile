import React, { memo, useEffect, useMemo, useState } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters'
import colors from '../../config/colors'
import InfoStep from './child/InfoStep'
import NextButton from './child/NextButton'

const Step3 = ({ navigation }) => {
  useEffect(() => {
    const unSub = navigation.addListener('focus', () => {
      navigation.dangerouslyGetParent().setOptions({
        headerRight: () => <NextButton routeName = 'ProfileStep3' />,
      })
    })
    return () => unSub
  }, [])
  return (
    <View style={styles.container}>
      <InfoStep
        step='3/5'
        title='Your Favorites'
      />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '10@s'
  },
})

export default memo(Step3)
