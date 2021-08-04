/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import ButtonFill from '../components/custom/ButtonFill';
import {CommonActions} from '@react-navigation/native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../config/colors';
import TextField from '../components/custom/TextField';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../redux/userReducer';
const ProfileContainer = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {username} = useSelector(state => state.user);
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
      <Text>{username}</Text>
      <ButtonFill
        text="Me"
        onPress={() => dispatch(setUser({username: 'NewUsername'}))}
      />
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ProfileContainer;
