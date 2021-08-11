/* eslint-disable no-self-compare */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, { memo, useEffect, useMemo, useState } from 'react';
import { View, TouchableNativeFeedback, ScrollView, ActivityIndicator } from 'react-native';
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import InfoStep from './child/InfoStep';
import NextButton from './child/NextButton';
import colors from '../../config/colors';
import Chip from './child/Chip';
import { getListFavorites } from '../../api/profileAPI'
import { useDispatch, useSelector } from 'react-redux';
import { setFavorites as setF } from '../../redux/updateProfileFirstReducer';

const Step4 = ({ navigation }) => {
  const favorites = useSelector(state => state.updateProfileFirst.favorites)
  const dispatch = useDispatch();
  const setFavorites = v => dispatch(setF(v))

  const [hobbies, setHobbies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unSub = navigation.addListener('focus', () => {
      navigation.dangerouslyGetParent().setOptions({
        headerRight: () => <NextButton routeName="ProfileStep5" />,
      });
    });

    getListFavorites().then(({ error, message, data }) => {
      setLoading(false)
      if (error) return alert(message)

      setHobbies(data.map(hobby => ({ id: hobby._id, title: hobby.title })))
    })

    return () => unSub;
  }, []);

  const onChange = newValue => {
    const clone = [...favorites]
    if (clone.includes(newValue)) {
      const index = clone.findIndex(item => newValue === item);
      clone.splice(index, 1);
      return setFavorites([...clone]);
    }
    clone.push(newValue);
    setFavorites([...clone]);
  };

  const hobbiesComponent = () => {
    return hobbies.map((item, index) => {
      const active = favorites.findIndex(i => i === item.id) !== -1;
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
      {loading ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size='large' color={colors.primary} />
      </View>
        :
        <ScrollView>
          <View style={styles.scrollView}>{hobbiesComponent()}</View>
        </ScrollView>
      }
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
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
