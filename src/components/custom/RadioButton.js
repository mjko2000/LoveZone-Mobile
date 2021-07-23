/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {TouchableNativeFeedback, View, Text} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import colors from '../../config/colors';
import Animated from 'react-native-reanimated';

const RadioButton = ({style, label, value, checked, onSelect}) => {
  return (
    <View style={{flexDirection: 'row', marginLeft: scale(10)}}>
      <TouchableNativeFeedback onPress={onSelect}>
        <Animated.View
          style={[
            styles.radioWrap,
            {borderColor: checked ? colors.primary : colors.white},
          ]}>
          <Animated.View
            style={[styles.radio, checked && styles.radioActive]}
          />
        </Animated.View>
      </TouchableNativeFeedback>
      <Text style={styles.label}>{label}</Text>
    </View>
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
    width: '8@s',
    height: '8@s',
    borderRadius: '8@s',
  },
  radioActive: {
    backgroundColor: colors.primary,
  },
  label: {
    color: colors.white,
    marginLeft: '5@s',
  },
});

export default memo(RadioButton);
