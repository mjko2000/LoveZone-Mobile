import React, {memo} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../../config/colors';

const TextField = ({placeholder, onChangeText, value, defaultValue, style, secureTextEntry, keyboardType, autoCapitalize, editable}) => {
  return (
    <TextInput
      value = {value}
      defaultValue={defaultValue}
      style={[styles.container, style]}
      placeholderTextColor={colors.gray}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry = {secureTextEntry}
      keyboardType = {keyboardType}
      autoCapitalize = {autoCapitalize}
      editable = {editable}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    backgroundColor: colors.textField,
    borderRadius: moderateScale(5),
    color: colors.white,
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(14),
  },
});
export default memo(TextField);
