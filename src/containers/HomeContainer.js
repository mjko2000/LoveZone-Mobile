/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {scale} from 'react-native-size-matters';
import colors from '../config/colors';
import CardComponent from '../components/Swipe/CardComponent';
import {getProfileFromToken, setLocationAPI} from '../api/profileAPI';
import helpers from '../helpers';
import {setProfile} from '../redux/userProfileReducer';
import {useDispatch} from 'react-redux';
import {findMatchAPI, likeAPI} from '../api/matchingAPI';
const HomeContainer = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const [firsData, setFirstData] = useState(null);
  const [secondData, setSecondData] = useState(null);
  const [thirdData, setThirdData] = useState(null);
  const [listProfile, setListProfile] = useState([]);
  useEffect(() => {
    helpers.getCurrentLocation().then(({latitude, longitude}) => {
      setLocationAPI({latitude, longitude}).then(({data, error, message}) => {
        if (error) return alert(message);
        getProfileFromToken().then(({data, error, message}) => {
          if (error) return alert(message);
          dispatch(setProfile(data));
        });
        findMatchAPI().then(({error, data, message}) => {
          if (error) return;
          if (data[0]) {
            data[0] = {
              ...data[0],
              distance: helpers.toDistance(
                latitude,
                longitude,
                data[0].location.latitude,
                data[0].location.longitude,
              ),
            };
            setFirstData(data[0]);
          }
          if (data[1]) {
            data[1] = {
              ...data[1],
              distance: helpers.toDistance(
                latitude,
                longitude,
                data[1].location.latitude,
                data[1].location.longitude,
              ),
            };
            setSecondData(data[1]);
          }
          if (data[2]) {
            data[2] = {
              ...data[2],
              distance: helpers.toDistance(
                latitude,
                longitude,
                data[2].location.latitude,
                data[2].location.longitude,
              ),
            };
            setThirdData(data[2]);
          }
          data.splice(0, 3);
          setListProfile(data);
        });
      });
    });
  }, []);

  useEffect(() => {}, [listProfile]);

  const checkMatched = ({err, message, data}) => {
    if (err) return;
    if (data.matched) alert('Matched');
  };

  const loadData = async index => {
    const nextData = listProfile[0];
    listProfile.splice(0, 1);
    setListProfile([...listProfile]);
    switch (index) {
      case 0:
        setFirstData(nextData);
        setFirstData(nextData);
        setActiveIndex(1);
        break;
      case 1:
        setSecondData(nextData);
        setActiveIndex(2);
        break;
      case 2:
        setThirdData(nextData);
        setActiveIndex(0);
        break;
    }
  };
  const onLeft = index => {
    loadData(index);
  };
  const onRight = index => {
    switch (index) {
      case 0:
        likeAPI(firsData).then(checkMatched);
        break;
      case 1:
        likeAPI(secondData).then(checkMatched);
        break;
      case 2:
        likeAPI(thirdData).then(checkMatched);
        break;
    }
    loadData(index);
  };
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <CardComponent
          data={firsData}
          onLeft={onLeft}
          onRight={onRight}
          index={0}
          activeIndex={activeIndex}
          setData={setFirstData}
        />
        <CardComponent
          data={secondData}
          onLeft={onLeft}
          onRight={onRight}
          index={1}
          activeIndex={activeIndex}
          setData={setSecondData}
        />
        <CardComponent
          data={thirdData}
          onLeft={onLeft}
          onRight={onRight}
          index={2}
          activeIndex={activeIndex}
          setData={setThirdData}
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
    paddingHorizontal: scale(5),
  },
  cardContainer: {
    flex: 1,
  },
});
export default HomeContainer;
