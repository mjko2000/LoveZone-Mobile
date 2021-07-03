import React, { useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import TextField from '../components/custom/TextField';
import colors from '../config/colors';
import ButtonFill from '../components/custom/ButtonFill';
import KeyboardView from '../components/custom/KeyboardView';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const SignInContainer = ({ navigation }) => {
  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <KeyboardView isHeader = {true}>
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
    </KeyboardView>
  );
};
export default SignInContainer;
