/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scale } from 'react-native-size-matters';
import colors from '../config/colors';
import CardComponent from '../components/Swipe/CardComponent';
const HomeContainer = props => {
  const { navigation } = props;
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
      <View style = {styles.cardContainer}>
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
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: scale(30),
    paddingHorizontal: scale(5)
  },
  cardContainer: {
    flex:1
  }
});
export default HomeContainer;
