import React, {memo} from 'react';
import {TouchableNativeFeedback, View} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';

const Checkbox = ({onPress, value, checked, style}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Icon
        name="checkmark-circle-outline"
        size={scale(25)}
        color={checked ? colors.primary : colors.textGray}
      />
    </TouchableNativeFeedback>
  );
};

const styles = ScaledSheet.create({
  checkbox: {
    backgroundColor: 'red',
  },
});
export default memo(Checkbox);
