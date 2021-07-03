/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
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
      <TextField style={styles.textField} placeholder={'Email'}></TextField>
      <TextField style={styles.textField} placeholder={'Password'}></TextField>
      <ButtonFill style={styles.buttonFill} text={'Login'}></ButtonFill>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            checked={isRemember}
            onPress={() => setRemember(remember => !isRemember)}
          />
          <Text style={styles.label}>Remember me </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Text style={styles.label} onPress={() => console.log('ok')}>
            Forgot password?
          </Text>
        </View>
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
  checkboxContainer: {
    flexDirection: 'row',

    marginVertical: 10,
    flex: 1,
  },
  checkbox: {},
  label: {
    fontSize: 14,
    color: colors.white,
  },
});

export default WelcomeContainer;
