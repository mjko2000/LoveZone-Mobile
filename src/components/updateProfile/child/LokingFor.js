import React from 'react'
import { View, Text } from 'react-native'
import { scale } from 'react-native-size-matters'
import GenderSquare from './GenderSquare'
import TitleInfo from './TitleInfo'

const LokingFor = ({value, setValue}) => {
  const onChange = (newValue) => {
    if(value.includes(newValue)){
      const index = value.findIndex((value) => newValue === value);
      value.splice(index,1)
      return setValue([...value])
    }
    value.push(newValue)
    setValue([...value])
  }
  return (
    <>
      <TitleInfo
        title='Looking for'
        iconName='wine-glass-alt'
      />
      <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: scale(20) }}>
        <GenderSquare value = 'Chat' icon = 'ios-chatbubble-ellipses-outline' isActive = {value.includes('Chat')} onSelect = {() => onChange('Chat')}/>
        <View style={{ width: scale(20) }} />
        <GenderSquare value = 'Love' icon = 'heart-half-sharp' isActive = {value.includes('Love')} onSelect = {() => onChange('Love')}/>
      </View>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <GenderSquare value = 'Friend' icon = 'person-add-outline' isActive = {value.includes('Friend')} onSelect = {() => onChange('Friend')}/>
        <View style={{ width: scale(20) }} />
        <GenderSquare value = 'Chill' icon = 'bed-outline' isActive = {value.includes('Chill')} onSelect = {() => onChange('Chill')}/>
      </View>
    </>
  )
}

export default LokingFor
