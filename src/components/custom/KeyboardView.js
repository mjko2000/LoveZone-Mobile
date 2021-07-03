import React, {useEffect} from 'react';
import {ScrollView, Dimensions, Keyboard, Platform} from 'react-native';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const KeyboardView = ({children, isHeader}) => {
  const scaleAnim = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      transform: [{translateY: -scaleAnim.value}],
    };
  });
  useEffect(() => {
    const onKeyboardShow = e => {
      scaleAnim.value = withSpring(e.endCoordinates.height / 2);
    };
    const onKeyboardHide = () => {
      scaleAnim.value = withSpring(0);
    };
    let eventShow =
      Platform.OS === 'ios'
        ? Keyboard.addListener('keyboardWillShow', onKeyboardShow)
        : Keyboard.addListener('keyboardDidShow', onKeyboardShow);
    let eventHide =
      Platform.OS === 'ios'
        ? Keyboard.addListener('keyboardWillHide', onKeyboardHide)
        : Keyboard.addListener('keyboardDidHide', onKeyboardHide);
    return () => {
      Keyboard.removeSubscription(eventShow);
      Keyboard.removeSubscription(eventHide);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        width: screenWidth,
        height: isHeader ? screenHeight - verticalScale(80) : screenHeight,
      }}
      scrollEnabled={false}>
      <Animated.View style={animatedStyles}>{children}</Animated.View>
    </ScrollView>
  );
};
export default KeyboardView;
