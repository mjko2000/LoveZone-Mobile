import React, { useEffect } from 'react';
import {
  ScrollView,
  Dimensions,
  Keyboard,
} from 'react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const KeyboardView = ({ children, isHeader }) => {
  const scaleAnim = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      transform: [{ translateY: -scaleAnim.value }],
    };
  });
  useEffect(() => {
    const onKeyboardShow = e => {
      scaleAnim.value = withSpring(e.endCoordinates.height / 2);
    };
    const onKeyboardHide = () => {
      scaleAnim.value = withSpring(0);
    };
    Keyboard.addListener('keyboardDidShow', onKeyboardShow);
    Keyboard.addListener('keyboardDidHide', onKeyboardHide);
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{
        width: screenWidth,
        height: isHeader ? screenHeight - verticalScale(80) : screenHeight,
      }}
      scrollEnabled={false}>
      <Animated.View style={animatedStyles}>
        {children}
      </Animated.View>
    </ScrollView>
  );
};
export default KeyboardView;
