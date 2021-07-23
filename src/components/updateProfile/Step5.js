/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import InfoStep from './child/InfoStep';
import NextButton from './child/NextButton';
import ButtonFill from '../custom/ButtonFill';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../config/colors';
import UploadImage from './child/UploadImage';

const Step5 = ({ navigation }) => {
  const [image, setImage] = useState()
  useEffect(() => {
    const unSub = navigation.addListener('focus', () => {
      navigation.dangerouslyGetParent().setOptions({
        headerRight: null
      });
    });
    return () => unSub;
  }, []);
  const onSelected = useCallback((image) => {
    setImage(image)
  },[])
  return (
    <View style={styles.container}>
      {/* <InfoStep step="5/5" title="Your Photos" /> */}
      <View style={styles.center}>
        <UploadImage onSelected = {onSelected} image = {image} />
        <Text style={styles.tips}>Choose from your library,{'\n'}we want to see you smile</Text>
      </View>
      <View style={styles.center}>
        <Text style={styles.waitText}>Please wait ...</Text>
        <ActivityIndicator size = {scale(30)} color = {colors.primary} />
      </View>

      <ButtonFill text={`Let's go`} disabled={true} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '10@s',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '50@vs'
  },
  tips: {
    color: colors.white,
    marginTop: '10@vs',
    fontWeight: 'bold',
    width: '200@s',
    textAlign: 'center',
    fontSize: '16@s',
    lineHeight: '20@s'
  },
  center: {
    alignItems: 'center'
  },
  waitText: {
    color: colors.textGray,
    marginBottom: '10@vs'
  }
});

export default memo(Step5);
