import React, {memo} from 'react';
import {TouchableNativeFeedback, View, Text, Button} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import colors from '../../config/colors';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolateColor,
  color,
} from 'react-native-reanimated';

const RadioButton = ({style, label, value, checked, onSelect}) => {
  return (
    <TouchableNativeFeedback onPress={onSelect}>
      <Animated.View
        style={[
          styles.radioWrap,
          {borderColor: checked ? colors.primary : colors.white},
        ]}>
        <Animated.View style={[styles.radio, checked && styles.radioActive]} />
      </Animated.View>
    </TouchableNativeFeedback>
  );
};

const styles = ScaledSheet.create({
  radioWrap: {
    width: '15@s',
    height: '15@s',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: '1@s',
  },
  radio: {
    width: '15@s',
    height: '15@s',
    borderRadius: '8@s',
  },
  radioActive: {
    backgroundColor: colors.primary,
  },
});

export default memo(RadioButton);
