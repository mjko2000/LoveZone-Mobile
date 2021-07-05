import React, {memo} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../../config/colors';

const TextField = ({placeholder, onChaneText, defaultValue, style, secureTextEntry, keyboardType, autoCapitalize}) => {
  return (
    <TextInput
      defaultValue={defaultValue}
      style={[styles.container, style]}
      placeholderTextColor={colors.gray}
      placeholder={placeholder}
      onChangeText={onChaneText}
      secureTextEntry = {secureTextEntry}
      keyboardType = {keyboardType}
      autoCapitalize = {autoCapitalize}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: scale(300),
    backgroundColor: colors.textField,
    borderRadius: moderateScale(5),
    color: colors.white,
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(14),
  },
});
export default memo(TextField);
