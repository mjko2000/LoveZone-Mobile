/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import ButtonFill from '../components/custom/ButtonFill';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../config/colors';
import CardComponent from '../components/Swipe/CardComponent';
import {useState} from 'react';
const HomeContainer = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [firsData, setFirstData] = useState(1);
  const [secondData, setSecondData] = useState(2);
  const [thirdData, setThirdData] = useState(3);
  const loadData = index => {
    switch (index) {
      case 0:
        setFirstData(thirdData + 1);
        setActiveIndex(1);
        break;
      case 1:
        setSecondData(firsData + 1);
        setActiveIndex(2);
        break;
      case 2:
        setThirdData(secondData + 1);
        setActiveIndex(0);
        break;
    }
  };
  const onLeft = index => {
    loadData(index);
  };
  const onRight = index => {
    loadData(index);
  };
  return (
    <View style={styles.container}>
      <CardComponent
        data={firsData}
        onLeft={onLeft}
        onRight={onRight}
        index={0}
        activeIndex={activeIndex}
      />
      <CardComponent
        data={secondData}
        onLeft={onLeft}
        onRight={onRight}
        index={1}
        activeIndex={activeIndex}
      />
      <CardComponent
        data={thirdData}
        onLeft={onLeft}
        onRight={onRight}
        index={2}
        activeIndex={activeIndex}
      />
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingBottom: verticalScale(20),
  },
});
export default HomeContainer;
