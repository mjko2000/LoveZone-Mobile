import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import ButtonFill from '../components/custom/ButtonFill';
import {CommonActions} from '@react-navigation/native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../config/colors';
import {useDispatch, useSelector} from 'react-redux';
import TextField from '../components/custom/TextField';
import {setUser} from '../redux/UserReducer';
const SettingContainer = props => {
  const {navigation} = props;
  const [newUsername, setNewUsername] = useState('');
  const dispatch = useDispatch();
  const {username} = useSelector(state => state.user);
  return (
    <View style={styles.container}>
      <Text>Setting Container</Text>
      <Text>{username}</Text>
      <TextField placeholder="Enter your name" onChaneText={setNewUsername} />
      <ButtonFill
        text="Change Username"
        onPress={() => {
          dispatch(setUser({username: newUsername}));
        }}
        style={{
          backgroundColor: colors.primary,
          width: scale(300),
          marginVertical: verticalScale(10),
        }}
      />
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
    backgroundColor: colors.background,
  },
});
export default SettingContainer;
