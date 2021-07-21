import React, { memo } from 'react'
import { TouchableNativeFeedback, Text } from 'react-native'
import { profileNavigation } from '../../../containers/signUp/UpdateProfileContainer'
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters'
import colors from '../../../config/colors'

const NextButton = ({routeName}) => {
  return (
    <TouchableNativeFeedback
      onPress={() => profileNavigation.navigate(routeName)}
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
  )
}

export default memo(NextButton)
