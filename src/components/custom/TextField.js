import React, {memo} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../../config/colors';

const TextField = (props = PropsType) => {
  const {placeholder, onChaneText, defaultValue, style} = props;
  return (
    <TextInput
      defaultValue={defaultValue}
      style={[styles.container, style]}
      placeholderTextColor={colors.gray}
      placeholder={placeholder}
      onChangeText={onChaneText}
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
