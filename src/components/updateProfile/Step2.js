import React, { memo, useEffect, useMemo, useState } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters'
import colors from '../../config/colors'
import { profileNavigation } from '../../containers/signUp/UpdateProfileContainer'
import GenderSquare from './child/GenderSquare'
import InfoStep from './child/InfoStep'
import TitleInfo from './child/TitleInfo'

const Step2 = ({ navigation }) => {
  useEffect(() => {
    const unSub = navigation.addListener('focus', () => {
      navigation.dangerouslyGetParent().setOptions({
        headerRight: () => (
          <TouchableNativeFeedback
            onPress={() => profileNavigation.navigate('ProfileStep3')}
          >
            <Text
              style={{
                color: colors.primary,
                padding: scale(10),
                marginTop: verticalScale(5),
              }}>
              Next
            </Text>
          </TouchableNativeFeedback>
        ),
      })
    })
    return () => unSub
  }, [])
  return (
    <View style={styles.container}>
      <InfoStep
        step='2/5'
        title='Your Gender'
      />
      <TitleInfo
        title='You are'
        iconName='male'
      />
      <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
        <GenderSquare />
        <View style = {{width: scale(20)}} />
        <GenderSquare />
      </View>
      <TitleInfo
        title='Looking for'
        iconName='male'
      />
      <View style = {{flexDirection: 'row', alignSelf: 'center', marginBottom: scale(20)}}>
        <GenderSquare />
        <View style = {{width: scale(20)}} />
        <GenderSquare />
      </View>
      <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
        <GenderSquare />
        <View style = {{width: scale(20)}} />
        <GenderSquare />
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '10@s'
  },
})

export default memo(Step2)
