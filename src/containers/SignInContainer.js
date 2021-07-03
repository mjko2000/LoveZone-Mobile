import React, {useEffect} from 'react';
import {
  Button,
  Text,
  TouchableOpacity,
  Dimensions,
  Keyboard,
} from 'react-native';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import TextField from '../components/custom/TextField';
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  withDecay,
} from 'react-native-reanimated';
import colors from '../config/colors';
import ButtonFill from '../components/custom/ButtonFill';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const SignInContainer = ({navigation}) => {
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
    Keyboard.addListener('keyboardDidShow', onKeyboardShow);
    Keyboard.addListener('keyboardDidHide', onKeyboardHide);
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Text
            style={{
              color: colors.primary,
              padding: scale(10),
              marginTop: verticalScale(5),
            }}>
            Next
          </Text>
        </TouchableOpacity>
      ),
    });
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);
  return (
    <Animated.ScrollView
      contentContainerStyle={styles.container}
      scrollEnabled={false}>
      <Animated.View style={animatedStyles}>
        <TextField
          placeholder="Email"
          style={{
            marginBottom: verticalScale(12),
          }}
        />
        <TextField
          placeholder="Password"
          style={{
            marginBottom: verticalScale(12),
          }}
        />
        <ButtonFill
          text="Sign In"
          style={{
            backgroundColor: colors.primary,
            width: scale(300),
            marginVertical: verticalScale(10),
          }}
        />
      </Animated.View>
    </Animated.ScrollView>
  );
};
const styles = ScaledSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    // backgroundColor: colors.background
  },
});
export default SignInContainer;
