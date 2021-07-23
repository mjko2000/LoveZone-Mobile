import React, {memo, useEffect} from 'react';
import {TouchableNativeFeedback, View, Text} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import colors from '../../../config/colors';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolateColor,
} from 'react-native-reanimated';

const Chip = ({value, style, onSelect, isActive}) => {
  return (
    <TouchableNativeFeedback>
      <View style={styles.chip}>
        <Text style={styles.content}>{value}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = ScaledSheet.create({
  chip: {
    backgroundColor: colors.textField,
    height: '30@s',
    borderRadius: '15@s',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '5@s',
    // borderColor: colors.primary,
    // borderWidth: '1@s',
  },
  content: {
    textAlign: 'center',
    marginHorizontal: '15@s',
    color: colors.white,
  },
});
export default memo(Chip);
