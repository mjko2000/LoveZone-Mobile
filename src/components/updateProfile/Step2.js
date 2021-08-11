import React, { memo, useEffect, useMemo, useState } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import colors from '../../config/colors';
import { profileNavigation } from '../../containers/signUp/UpdateProfileContainer';
import InfoStep from './child/InfoStep';
import NextButton from './child/NextButton';
import TextField from '../custom/TextField';
import Icon from 'react-native-vector-icons/Entypo';
import RadioButton from '../custom/RadioButton';

import {useDispatch, useSelector} from 'react-redux';
import {setWorkPlace, setPhone} from '../../redux/updateProfileFirstReducer';

const Step2 = ({ navigation }) => {
  const [status, setStatus] = useState('studying')
  const {workAt, phone} = useSelector(state => state.updateProfileFirst)
  const dispatch = useDispatch();
  const onChangePhone = (p) => dispatch(setPhone(p))
  const onChangeWorkPlace = (w) => dispatch(setWorkPlace(w))

  useEffect(() => {
    const unSub = navigation.addListener('focus', () => {
      navigation.dangerouslyGetParent().setOptions({
        headerRight: () => <NextButton routeName="ProfileStep3" />,
      });
    });
    return () => unSub;
  }, []);

  return (
    <View style={styles.container}>
      <InfoStep step="2/5" title="Your Information" />
      <TextField 
        placeholder="+84"
        onChangeText = {onChangePhone}
      />
      <View style={styles.titleContainer}>
        <View style={styles.title}>
          <Icon
            name="briefcase"
            color={colors.primary}
            style={{ width: scale(20) }}
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
            checked={status === 'studying'}
            onSelect={() => setStatus("studying")}
          />
          <View style={{ width: scale(20) }} />
          <RadioButton
            label={'Working'}
            checked={status === 'working'}
            onSelect={() => setStatus("working")}
          />
        </View>
      </View>
      <TextField
        placeholder={`Your ${status === 'studying' ? 'University' : 'Company'
          }`}
        onChangeText = {onChangeWorkPlace}
      />
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
