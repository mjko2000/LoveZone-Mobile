import React, { memo, useCallback } from 'react'
import { View, Text } from 'react-native'
import { scale } from 'react-native-size-matters'
import GenderSquare from './GenderSquare'
import TitleInfo from './TitleInfo'

const GenderChoice = ({gender, setGender}) => {
  const setGenderCallback = useCallback((value) => setGender(value),[])
  return (
    <>
      <TitleInfo
        title='You are'
        iconName='male'
      />
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <GenderSquare value = 'male' icon = 'male' isActive = {gender === 'male'} onSelect = {setGenderCallback} />
        <View style={{ width: scale(20) }} />
        <GenderSquare value = 'female' icon = 'female' isActive = {gender === 'female'} onSelect = {setGenderCallback}/>
      </View>
    </>
  )
}

export default memo(GenderChoice)
