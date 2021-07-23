/* eslint-disable react-native/no-inline-styles */
import React, {memo, useEffect, useMemo, useState} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
// import {Picker} from '@react-native-picker/picker';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import colors from '../../config/colors';
import {profileNavigation} from '../../containers/signUp/UpdateProfileContainer';
import InfoStep from './child/InfoStep';
import NextButton from './child/NextButton';
import TextField from '../custom/TextField';
import Icon from 'react-native-vector-icons/Entypo';
import RadioButton from '../custom/RadioButton';

const Step2 = ({navigation}) => {
  const [info, setInfo] = useState({
    phone: '',
    status: 'studying',
    workAt: '',
  });
  useEffect(() => {
    const unSub = navigation.addListener('focus', () => {
      navigation.dangerouslyGetParent().setOptions({
        headerRight: () => <NextButton routeName="ProfileStep3" />,
      });
    });
    return () => unSub;
  }, []);

  const workComponent = useMemo(
    () => (
      <>
        <View style={styles.titleContainer}>
          <View style={styles.title}>
            <Icon
              name="briefcase"
              color={colors.primary}
              style={{width: scale(20)}}
              size={scale(20)}
            />
            <Text style={styles.titleText}>You are: </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            <RadioButton
              label={'Studying'}
              checked={info.status === 'studying'}
              onSelect={() => setInfo({...info, status: 'studying'})}
            />
            <View style={{width: scale(20)}} />
            <RadioButton
              label={'Working'}
              checked={info.status === 'working'}
              onSelect={() => setInfo({...info, status: 'working'})}
            />
          </View>
        </View>
        <TextField
          placeholder={`Your ${
            info.status === 'studying' ? 'University' : 'Company'
          }`}
        />
      </>
    ),
    [info],
  );

  return (
    <View style={styles.container}>
      <InfoStep step="2/5" title="Your Information" />
      <TextField placeholder="+84" />
      {workComponent}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '10@s',
  },
  titleContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: '10@vs',
    marginTop: '20@vs',
    justifyContent: 'space-between',
  },
  title: {
    flexDirection: 'row',
    flex: 1,
  },
  titleText: {
    color: colors.white,
    fontSize: '15@s',
    marginLeft: '10@s',
    fontWeight: 'bold',
  },
  valueText: {
    color: colors.primary,
  },
});

export default memo(Step2);
