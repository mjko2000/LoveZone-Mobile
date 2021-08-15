/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import { View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scale } from 'react-native-size-matters';
import colors from '../config/colors';
import CardComponent from '../components/Swipe/CardComponent';
import { getProfileFromToken, setLocationAPI } from '../api/profileAPI';
import helpers from '../helpers';
import { setProfile } from '../redux/userProfileReducer';
import { useDispatch } from 'react-redux';
const HomeContainer = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const [firsData, setFirstData] = useState(null);
  const [secondData, setSecondData] = useState(null);
  const [thirdData, setThirdData] = useState(null);
  useEffect(() => {
    helpers.getCurrentLocation().then(({latitude, longitude}) => {
      setLocationAPI({latitude, longitude}).then(({data, error, message}) => {
        if(error) return alert(message)
        getProfileFromToken().then(({data, error, message}) => {
          if(error) return alert(message)
          dispatch(setProfile(data))
        })
      })
    })
  },[])
  
  const loadData = async index => {
    switch (index) {
      case 0:
        setFirstData(null);
        setActiveIndex(1);
        break;
      case 1:
        setSecondData(null);
        setActiveIndex(2);
        break;
      case 2:
        setThirdData(null);
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
          setData = {setFirstData}
        />
        <CardComponent
          data={secondData}
          onLeft={onLeft}
          onRight={onRight}
          index={1}
          activeIndex={activeIndex}
          setData = {setSecondData}
        />
        <CardComponent
          data={thirdData}
          onLeft={onLeft}
          onRight={onRight}
          index={2}
          activeIndex={activeIndex}
          setData = {setThirdData}
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
