import React, {memo, useEffect, useMemo, useState} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import colors from '../../config/colors';
import {profileNavigation} from '../../containers/signUp/UpdateProfileContainer';
import GenderChoice from './child/GenderChoice';
import InfoStep from './child/InfoStep';
import LokingFor from './child/LokingFor';
import NextButton from './child/NextButton';
import {useDispatch, useSelector} from 'react-redux';
import {setLooking as setL, setGender as getG} from '../../redux/updateProfileFirstReducer';

const Step3 = ({navigation}) => {
  const {lookingFor, gender} = useSelector(state => state.updateProfileFirst)
  const dispatch = useDispatch();
  const setGender = (v) => dispatch(getG(v))
  const setLooking = (v) => dispatch(setL(v))
  useEffect(() => {
    const unSub = navigation.addListener('focus', () => {
      navigation.dangerouslyGetParent().setOptions({
        headerRight: () => <NextButton routeName="ProfileStep4" />,
      });
    });
    return () => unSub;
  }, []);
  return (
    <View style={styles.container}>
      <InfoStep step="3/5" title="Your Gender" />
      <GenderChoice gender={gender} setGender={setGender} />
      <LokingFor value={lookingFor} setValue={setLooking} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '10@s',
  },
});

export default memo(Step3);
