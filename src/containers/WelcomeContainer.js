import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {ScaledSheet} from 'react-native-size-matters';
import ButtonFill from '../components/custom/ButtonFill';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../config/colors';
const WelcomeContainer = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text>Wellcome Screen</Text>
      <TextInput style={styles.textInput} placeholder="Email" />
      <TextInput style={styles.textInput} placeholder="Password" />
      <ButtonFill
        text="Login"
        onPress={() => navigation.replace('Main')}
        style={styles.button}
      />
      <ButtonFill
        text="Go to SignIn"
        onPress={() => navigation.push('SignIn')}
        style={{
          backgroundColor: colors.primary,
          width: scale(300),
          marginVertical: verticalScale(10),
        }}
      />
      <View>
        <View style={styles.checkBox}>
          <CheckBox />
          <Text style={styles.label}>Remember me</Text>
        </View>
      </View>
      <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
        style={{
          width: scale(300),
          justifyContent: 'center',
        }}
        onPress={() => {}}>
        Login with Facebook
      </Icon.Button>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    width: '150@s',
    marginVertical: '10@vs',
    borderRadius: '50@s',
  },
  textInput: {
    width: '300@s',
    marginVertical: '10@vs',
    borderRadius: '15@s',
    padding: '10@s',
    backgroundColor: colors.textField,
    color: colors.white,
  },
  checkBox: {
    flexDirection: 'row',
  },
  teasat: {
    width: '100@s', // = scale(100)
    height: '200@vs', // = verticalScale(200)
    padding: '2@msr', // = Math.round(moderateScale(2))
    margin: 5,
  },
  row: {
    padding: '10@ms0.3', // = moderateScale(10, 0.3)
    width: '50@ms', // = moderateScale(50)
    height: '30@mvs0.3', // = moderateVerticalScale(30, 0.3)
  },
});

export default WelcomeContainer;
