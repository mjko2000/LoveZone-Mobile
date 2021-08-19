/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import TextField from '../components/custom/TextField';
import { ScaledSheet } from 'react-native-size-matters';
import ButtonFill from '../components/custom/ButtonFill';
import Checkbox from '../components/custom/Checkbox';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../config/colors';
import KeyboardView from '../components/custom/KeyboardView';
import { signInAPI } from '../api/authAPI';
import helpers from '../helpers';
import NavigationService from '../helpers/NavigationService';
const LoginContainer = props => {
  const { navigation } = props;
  const [loading, setLoading] = useState(false)
  const [isRemember, setRemember] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = () => {
    setLoading(true)
    signInAPI({
      email: email,
      password: password,
    }).then(({ data, error, message }) => {
      setLoading(false)
      if (error) {
        return alert(message);
      }
      helpers.saveUserToken({ accessToken: data.accessToken, isRemember: data.userInfo.profileUpdated ? isRemember : false })
      if (data.userInfo.profileUpdated) NavigationService.navigate('Main');
      else NavigationService.navigate('UpdateProfile');
    });
  };

  return (
    <KeyboardView>
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <TextField
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize={'none'}
            style={styles.textField}
            placeholder={'Email'}
            onChangeText={setEmail}
          />
          <TextField
            autoCapitalize={'none'}
            secureTextEntry={true}
            style={styles.textField}
            placeholder={'Password'}
            onChangeText={setPassword}
          />
          <ButtonFill
            style={styles.buttonFill}
            text={'Login'}
            onPress={onSubmit}
            disabled = {loading}
            loading = {loading}
          />
          <View style={styles.row}>
            <View style={styles.checkboxContainer}>
              <Checkbox
                checked={isRemember}
                onPress={() => setRemember(remember => !remember)}
              />
              <Text style={styles.label}>Keep me login</Text>
            </View>
            <TouchableOpacity onPress={() => { }}>
              <Text style={styles.label}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.socialContainer}>
          <View
            style={{
              flexDirection: 'row',
              width: '40%',
              justifyContent: 'space-between',
              marginBottom: verticalScale(30),
            }}>
            <TouchableNativeFeedback>
              <View style={[styles.social, { backgroundColor: '#4267B2' }]}>
                <Icon name="facebook" size={scale(25)} color={'white'} />
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style={styles.social}>
                <Icon name="google-plus" size={scale(25)} color={'white'} />
              </View>
            </TouchableNativeFeedback>
          </View>
          <TouchableOpacity onPress={() => NavigationService.navigate('SignUp')}>
            <Text style={styles.label}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardView>
  );
};

const styles = ScaledSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    height: '70%',
    marginTop: '50@vs',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '90@vs',
  },
  socialContainer: {
    height: '30%',
    width: '100%',
    alignItems: 'center',
  },
  textField: {
    marginBottom: verticalScale(12),
  },
  buttonFill: {
    backgroundColor: colors.primary,
    marginVertical: '10@vs',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '30@s',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: '12@s',
    color: colors.textGray,
    marginLeft: '5@s',
  },
  social: {
    backgroundColor: '#ea4335',
    width: '60@s',
    height: '60@s',
    borderRadius: '30@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginContainer;
