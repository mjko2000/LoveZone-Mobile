import React, {createRef, useCallback, useEffect, useState} from 'react';
import {Text, TouchableOpacity, Dimensions, Alert} from 'react-native';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import TextField from '../../components/custom/TextField';
import colors from '../../config/colors';
import ButtonFill from '../../components/custom/ButtonFill';
import KeyboardView from '../../components/custom/KeyboardView';
import {signUpAPI} from '../../api/authAPI';
import config from '../../config/config';
import helpers from '../../helpers';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const SignUpContainer = ({navigation, route}) => {
  const email = createRef('');
  const password = createRef('');
  const confirmPassword = createRef('');
  const [validated, setValidate] = useState(false);
  const [loading, setLoading] = useState(false);
  const validate = useCallback(() => {
    if (email.current && password.current && confirmPassword.current)
      return setValidate(true);
    setValidate(false);
  }, []);
  const setEmail = useCallback(text => {
    email.current = text;
    validate();
  }, []);
  const setPassword = useCallback(text => {
    password.current = text;
    validate();
  }, []);
  const setConfirmPassword = useCallback(text => {
    confirmPassword.current = text;
    validate();
  }, []);
  const onSubmit = useCallback(() => {
    setLoading(true);
    signUpAPI({
      email: email.current,
      password: password.current,
      confirmPassword: confirmPassword.current,
    }).then(({error, message, data}) => {
      setLoading(false);
      if (error) return alert(message);
      helpers.saveUserToken({accessToken: data.accessToken, isRemember: false})
      navigation.navigate('OTP', {...data});
    });
  }, []);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <KeyboardView isHeader={true}>
      <TextField
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize={'none'}
        style={styles.textField}
        onChangeText={setEmail}
        editable={!loading}
      />
      <TextField
        placeholder="Password"
        style={styles.textField}
        secureTextEntry={true}
        autoCapitalize={'none'}
        onChangeText={setPassword}
        editable={!loading}
      />
      <TextField
        placeholder="Confirm Password"
        style={styles.textField}
        secureTextEntry={true}
        autoCapitalize={'none'}
        onChangeText={setConfirmPassword}
        editable={!loading}
      />
      <ButtonFill
        onPress={onSubmit}
        disabled={loading || !validated}
        text="Sign In"
        loading={loading}
        style={{
          backgroundColor: validated ? colors.primary : colors.gray,
          marginVertical: verticalScale(10),
        }}
      />
      <ButtonFill
        onPress={() => navigation.navigate('UpdateProfile')}
        text="To Profile edit"
        style={{
          backgroundColor: validated ? colors.primary : colors.gray,
          marginVertical: verticalScale(10),
        }}
      />
    </KeyboardView>
  );
};
const styles = ScaledSheet.create({
  textField: {
    marginBottom: verticalScale(12),
  },
});
export default SignUpContainer;
