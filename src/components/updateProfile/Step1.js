import React, {memo, useEffect, useMemo, useState} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import colors from '../../config/colors';
import {profileNavigation} from '../../containers/signUp/UpdateProfileContainer';
import InfoStep from './child/InfoStep';
import TextField from '../custom/TextField';
import CustomSlider from '../custom/CustomSlider';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '../custom/DateTimePicker';
import TitleInfo from './child/TitleInfo';
import NextButton from './child/NextButton';

import {useDispatch, useSelector} from 'react-redux';
import {setBirth as setB, setHeight as setH, setWeight as setW, setName as setN} from '../../redux/updateProfileFirstReducer';

const Step1 = ({navigation}) => {
  const [showPicker, setShowPicker] = useState(false);
  const {height, weight, birth, name} = useSelector(state => state.updateProfileFirst)
  const dispatch = useDispatch();
  const setHeight = (h) => dispatch(setH(h))
  const setWeight = (w) => dispatch(setW(w))
  const setBirth = (b) => dispatch(setB(b))
  const setName = (n) => dispatch(setN(n))

  useEffect(() => {
    const unSub = navigation.addListener('focus', () => {
      navigation.dangerouslyGetParent().setOptions({
        headerRight: () => <NextButton routeName="ProfileStep2" />,
      });
    });
    return () => unSub;
  }, []);
  const heightComponent = useMemo(
    () => (
      <>
        <View style={styles.titleContainer}>
          <View style={styles.title}>
            <Icon
              name="ruler-vertical"
              color={colors.primary}
              style={{width: scale(20)}}
              size={scale(20)}
            />
            <Text style={styles.titleText}>Height</Text>
          </View>
          <Text style={styles.valueText}>{Math.round(height)}cm</Text>
        </View>
        <CustomSlider
          onValueChange={setHeight}
          minimumValue={100}
          maximumValue={220}
        />
      </>
    ),
    [height],
  );
  const weigthComponent = useMemo(
    () => (
      <>
        <View style={styles.titleContainer}>
          <View style={styles.title}>
            <Icon
              name="weight"
              color={colors.primary}
              style={{width: scale(20)}}
              size={scale(20)}
            />
            <Text style={styles.titleText}>Weight</Text>
          </View>
          <Text style={styles.valueText}>{Math.round(weight)}kg</Text>
        </View>
        <CustomSlider
          onValueChange={setWeight}
          minimumValue={30}
          maximumValue={150}
        />
      </>
    ),
    [weight],
  );
  const birthComponent = useMemo(
    () => (
      <>
        <View style={styles.titleContainer}>
          <View style={styles.title}>
            <Icon
              name="birthday-cake"
              color={colors.primary}
              style={{width: scale(20)}}
              size={scale(20)}
            />
            <Text style={styles.titleText}>Your Birthday</Text>
          </View>
        </View>
        <TouchableNativeFeedback
          onPress={() => setShowPicker(showPicker => !showPicker)}>
          <View style={styles.date}>
            <Text style={styles.dateText}>{birth.toDateString()}</Text>
            <Icon name="chevron-right" size={scale(20)} color="white" />
          </View>
        </TouchableNativeFeedback>
      </>
    ),
    [birth],
  );
  return (
    <View style={styles.container}>
      <InfoStep step="1/5" title="Your Infomation" />
      <TextField placeholder="Your name" onChangeText = {setName} />
      {birthComponent}
      {heightComponent}
      {weigthComponent}
      <DateTimePicker
        show={showPicker}
        setShow={setShowPicker}
        onResult={setBirth}
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
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '12@s',
    backgroundColor: colors.textField,
    borderRadius: '5@s',
  },
  dateText: {
    color: colors.primary,
  },
});

export default memo(Step1);
