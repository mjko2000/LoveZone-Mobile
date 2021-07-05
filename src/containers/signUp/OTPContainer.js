import React, { useEffect, useState } from 'react';
import { TouchableNativeFeedback, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import TextField from '../../components/custom/TextField';
import colors from '../../config/colors';
import ButtonFill from '../../components/custom/ButtonFill';
import KeyboardView from '../../components/custom/KeyboardView';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
import OTPInput from '../../components/auth/OTPInput';
import { activeOtpAPI, signUpAPI } from '../../api/authAPI';
const OTPContainer = ({ navigation, route }) => {
  const account = route.params?.userInfo
  const [otp, setOtp] = useState()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableNativeFeedback>
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
    });
  }, [])
  const onSubmit = () => {
    activeOtpAPI({
      uid: account.id,
      otp
    }).then(({ error, data, message }) => {
      if (error) return alert(message)
      navigation.replace("UpdateProfile")
    })
  }
  const onResend = () => {
    signUpAPI({ ...account }).then(({ error, data, message }) => {
      if (error) console.log(message)
    })
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <OTPInput
        onSubmit={setOtp}
      />
      <TouchableNativeFeedback
        onPress={onResend}
      >
        <Text style={{ color: colors.white, paddingVertical: scale(10) }}>Can't recive email? Resend OTP</Text>
      </TouchableNativeFeedback>
      <ButtonFill
        onPress={onSubmit}
        text="Sign In"
        style={{
          backgroundColor: colors.primary,
          width: scale(300),
          marginVertical: verticalScale(10),
        }}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})
export default OTPContainer;
