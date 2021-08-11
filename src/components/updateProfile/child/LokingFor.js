import React from 'react'
import { View, Text } from 'react-native'
import { scale } from 'react-native-size-matters'
import GenderSquare from './GenderSquare'
import TitleInfo from './TitleInfo'

const LokingFor = ({value, setValue}) => {
  const onChange = (newValue) => {
    const clone = [...value]
    if(clone.includes(newValue)){
      const index = clone.findIndex((value) => newValue === value);
      clone.splice(index,1)
      return setValue([...clone])
    }
    clone.push(newValue)
    setValue([...clone])
  }
  return (
    <>
      <TitleInfo
        title='Looking for'
        iconName='wine-glass-alt'
      />
      <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: scale(20) }}>
        <GenderSquare value = 'chat' icon = 'ios-chatbubble-ellipses-outline' isActive = {value.includes('chat')} onSelect = {() => onChange('chat')}/>
        <View style={{ width: scale(20) }} />
        <GenderSquare value = 'love' icon = 'heart-half-sharp' isActive = {value.includes('love')} onSelect = {() => onChange('love')}/>
      </View>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <GenderSquare value = 'friend' icon = 'person-add-outline' isActive = {value.includes('friend')} onSelect = {() => onChange('friend')}/>
        <View style={{ width: scale(20) }} />
        <GenderSquare value = 'chill' icon = 'bed-outline' isActive = {value.includes('chill')} onSelect = {() => onChange('chill')}/>
      </View>
    </>
  )
}

export default LokingFor
