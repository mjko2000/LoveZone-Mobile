import React, { memo, useEffect, useRef, useState } from 'react'
import { View, Text, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import colors from '../../config/colors'

const OTPInput = ({onSubmit}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [focusIndex, setFocusIndex] = useState(0)
  const [focusInput, setFocusInput] = useState(0)
  const input1 = useRef()
  const input2 = useRef()
  useEffect(() => {
    setTimeout(() => input1.current.focus(),200)
  }, [])
  const onChange = (num) => {
    if(num === 'Backspace'){
      otp[focusIndex] = ''
      setOtp([...otp])
      if(focusIndex === 0) return
      setFocusIndex(index => index-1)
      return
    }
    if(Number.parseInt(num).toString() === 'NaN') return
    otp[focusIndex] = Number(num)
    setOtp([...otp])
    if(focusIndex === 5) {
      onSubmit(otp.join(''))
      return
    }
    setFocusIndex(index => index+1)
  }
  return (
    <View>
      <View style={styles.container}>
        {otp.map((item, index) => (
          <TouchableWithoutFeedback
            onPress = {() => {
              if(focusInput === 0){
                input2.current.focus()
                setFocusInput(1)
                return
              }
              input1.current.focus()
              setFocusInput(0)
            }}
          >
            <View style={[styles.textView, {
              borderColor: focusIndex === index ? colors.primary : 'transparent'
            }]}>
              <Text style = {styles.text}>{item}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
      <TextInput
        ref={input1}
        maxLength={1}
        value={''}
        style = {{width: 0, height: 0, padding: 0}}
        keyboardType = 'numeric'
        onKeyPress = {e => onChange(e.nativeEvent.key)}
      />
      <TextInput
        ref={input2}
        maxLength={1}
        value={''}
        style = {{width: 0, height: 0, padding: 0}}
        keyboardType = 'numeric'
        onKeyPress = {e => onChange(e.nativeEvent.key)}
      />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    width: '300@s',
    justifyContent: 'space-between',
    paddingTop: '10@s'
  },
  textView: {
    backgroundColor: colors.darkGray,
    borderRadius: '5@s',
    width: '43@s',
    height: '43@s',
    justifyContent: 'center',
    alignItems:'center',
    borderWidth: '1@s'
  },
  text: {
    color: colors.white,
    fontSize: '18@s',
    fontWeight: 'bold',
  }
})

export default memo(OTPInput)
