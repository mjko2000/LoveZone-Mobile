import React, {memo, useEffect} from 'react';
import {TouchableNativeFeedback} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import colors from '../../config/colors';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolateColor,
} from 'react-native-reanimated';
const checkboxWidth = scale(30);
const Checkbox = ({onPress, value, checked, style}) => {
  const anim = useSharedValue(checked ? 0 : 1);
  useEffect(() => {
    anim.value = withSpring(checked ? 1 : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);
  const tranformStyle = useAnimatedStyle(() => ({
    transform: [{translateX: (anim.value * 30) / 2}],
  }));
  const backgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      anim.value,
      [0, 1],
      [colors.white, colors.primary],
    ),
  }));
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Animated.View
        style={[
          styles.container,
          {
            borderColor: checked ? colors.primary : colors.white,
          },
        ]}>
        <Animated.View style={[styles.dot, backgroundStyle, tranformStyle]} />
      </Animated.View>
    </TouchableNativeFeedback>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: checkboxWidth,
    borderRadius: '10@s',
    borderWidth: '1@s',
    borderColor: colors.white,
    backgroundColor: 'transparent',
  },
  dot: {
    backgroundColor: colors.white,
    width: '15@s',
    height: '15@s',
    borderRadius: '7.5@s',
  },
});
export default memo(Checkbox);
