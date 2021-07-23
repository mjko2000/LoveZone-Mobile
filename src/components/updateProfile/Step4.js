/* eslint-disable no-self-compare */
/* eslint-disable react-hooks/exhaustive-deps */
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

const Step4 = ({navigation}) => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const onChange = newValue => {
    if (selectedHobbies.includes(newValue)) {
      const index = selectedHobbies.findIndex(item => newValue === item);
      selectedHobbies.splice(index, 1);
      return setSelectedHobbies([...selectedHobbies]);
    }
    selectedHobbies.push(newValue);
    setSelectedHobbies([...selectedHobbies]);
  };

  console.log(selectedHobbies);

  const hobbies = [
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

  useEffect(() => {
    const unSub = navigation.addListener('focus', () => {
      navigation.dangerouslyGetParent().setOptions({
        headerRight: () => <NextButton routeName="ProfileStep5" />,
      });
    });
    return () => unSub;
  }, []);

  const hobbiesComponent = () => {
    return hobbies.map((item, index) => {
      const active = selectedHobbies.findIndex(i => i === item.id) !== -1;
      return (
        <Chip
          key={index.toString()}
          text={item.title}
          value={index}
          isActive={active}
          onSelect={() => onChange(item.id)}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <InfoStep step="4/5" title="Your Favorites" />
      <ScrollView>
        <View style={styles.scrollView}>{hobbiesComponent()}</View>
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '10@s',
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

export default memo(Step4);
