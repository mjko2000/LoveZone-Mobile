import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import ButtonFill from '../components/custom/ButtonFill';
import {CommonActions} from '@react-navigation/native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../config/colors';
import TextField from '../components/custom/TextField';
const ProfileContainer = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text>Profile Container</Text>
      <ButtonFill
        text="Logout"
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Auth'}],
            }),
          )
        }
        style={{
          backgroundColor: colors.primary,
          width: scale(300),
          marginVertical: verticalScale(10),
        }}
      />
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ProfileContainer;
