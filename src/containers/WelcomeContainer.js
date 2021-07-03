/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import TextField from '../components/custom/TextField';
import {ScaledSheet} from 'react-native-size-matters';
import ButtonFill from '../components/custom/ButtonFill';
import Checkbox from '../components/custom/Checkbox';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../config/colors';
import KeyboardView from '../components/custom/KeyboardView';
const WelcomeContainer = props => {
  const {navigation} = props;
  const [isRemember, setRemember] = useState(false);
  return (
    <KeyboardView>
      <View
        style={{
          flex: 4,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: scale(100),
        }}>
        <TextField style={styles.textField} placeholder={'Email'} />
        <TextField style={styles.textField} placeholder={'Password'} />
        <ButtonFill
          style={styles.buttonFill}
          text={'Login'}
          onPress={() => navigation.navigate('Main')}
        />
        <View style={styles.row}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              checked={isRemember}
              onPress={() => setRemember(remember => !remember)}
            />
            <Text style={styles.label}>Remember me </Text>
          </View>
          <TouchableOpacity onPress={() => {}}>
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
            <View style={[styles.social, {backgroundColor: '#4267B2'}]}>
              <Icon name="facebook" size={scale(25)} color={'white'} />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View style={styles.social}>
              <Icon name="google-plus" size={scale(25)} color={'white'} />
            </View>
          </TouchableNativeFeedback>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.label}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardView>
  );
};

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textField: {
    marginBottom: verticalScale(12),
  },
  buttonFill: {
    backgroundColor: colors.primary,
    width: '300@s',
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
  socialContainer: {
    flex: 1.5,
    width: '100%',
    alignItems: 'center',
  },
});

export default WelcomeContainer;
