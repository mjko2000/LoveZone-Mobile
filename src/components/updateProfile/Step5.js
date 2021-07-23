/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {memo, useEffect, useMemo, useState} from 'react';
import {View, TouchableNativeFeedback, ScrollView} from 'react-native';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import InfoStep from './child/InfoStep';
import NextButton from './child/NextButton';
import TextField from '../custom/TextField';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../config/colors';
import Chip from './child/Chip';

const Step5 = ({navigation}) => {
  useEffect(() => {
    const unSub = navigation.addListener('focus', () => {
      navigation.dangerouslyGetParent().setOptions({
        headerRight: () => <NextButton routeName="ProfileStep3" />,
      });
    });
    return () => unSub;
  }, []);

  const data = [
    {id: 1, title: 'Play Game'},
    {id: 2, title: 'Football'},
    {id: 3, title: 'Swimming'},
    {id: 4, title: 'Shopping'},
    {id: 5, title: 'Cooking'},
    {id: 6, title: 'Chill'},
    {id: 7, title: 'Acting'},
    {id: 8, title: 'Arts'},
    {id: 9, title: 'Badminton'},
    {id: 10, title: 'Billiards'},
    {id: 11, title: 'Blogging'},
    {id: 12, title: 'BoardGames'},
    {id: 13, title: 'Cartooning'},
    {id: 14, title: 'Car Racing'},
    {id: 15, title: 'Climbing'},
    {id: 16, title: 'Cosplay'},
    {id: 17, title: 'Cycling'},
    {id: 18, title: 'Dancing'},
    {id: 19, title: 'Drama'},
    {id: 20, title: 'Drawing'},
    {id: 21, title: 'Exercise'},
    {id: 22, title: 'Fishing'},
    {id: 23, title: 'Guitar'},
    {id: 24, title: 'Home Brewing'},
    {id: 25, title: 'Illusion'},
    {id: 26, title: 'Kites'},
    {id: 27, title: 'Learning A Foreign Language'},
    {id: 28, title: 'Machining'},
    {id: 29, title: 'Nail Art'},
    {id: 30, title: 'Squash'},
  ];

  const _renderChip = () => {
    return data.map((item, index) => {
      return <Chip key={item.id} value={item.title} />;
    });
  };
  return (
    <View style={styles.container}>
      <InfoStep step="5/5" title="Your Favorites" />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginBottom: scale(15),
        }}>
        <TextField
          placeholder="Add your favorite..."
          style={styles.inputField}
        />
        <TouchableNativeFeedback>
          <Icon name="pluscircle" size={40} style={styles.buttonAdd}></Icon>
        </TouchableNativeFeedback>
      </View>
      <ScrollView>
        <View style={styles.scrollView}>{_renderChip()}</View>
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '10@s',
    flex: 1,
    justifyContent: 'center',
  },
  inputField: {
    flex: 8,
    height: '50@s',
    marginRight: '5@s',
  },
  buttonAdd: {
    flex: 2,
    color: colors.primary,
    height: '40@s',
    width: '40@s',
    margin: '5@s',
    marginLeft: '20@s',
  },
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'stretch',
  },
});

export default memo(Step5);
