/* eslint-disable no-unused-vars */
import React, {useCallback} from 'react';
import {View, Text, Image, TouchableNativeFeedback} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import ButtonFill from '../components/custom/ButtonFill';
import colors from '../config/colors';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../redux/userReducer';
import Icon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../config/config';

const ProfileContainer = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {username} = useSelector(state => state.user);

  const onLogout = useCallback(() => {
    AsyncStorage.removeItem('accessToken');
    navigation.replace('Auth', {screen: 'Login'});
    config.accessToken = '';
  }, []);

  const user = {
    id: 1,
    name: 'Ahihi haha',
    age: '20',
    image:
      'https://i.vietgiaitri.com/2018/3/6/anh-the-xinh-lung-linh-cua-co-gai-thai-sieu-nong-bong-142541.jpeg',
  };

  const onSubmit = () => {
    console.log('ok');
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: user.image}} style={styles.image} />
      <Text style={styles.username}>{user.name}</Text>
      <Text style={styles.age}>{user.age} age - Location</Text>
      <ButtonFill
        style={styles.buttonFill}
        text={'Get Premium'}
        onPress={onSubmit}
      />
      <View style={styles.bottom}>
        <TouchableNativeFeedback style={styles.choice}>
          <View style={styles.wrap}>
            <Icon
              style={[styles.rate, {backgroundColor: '#dd051b'}]}
              size={30}
              color={colors.white}
              name="list"
            />
            <Text style={styles.text}>My Activities</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback style={styles.choice}>
          <View style={styles.wrap}>
            <Icon
              style={[styles.rate, {backgroundColor: '#f4a524'}]}
              size={30}
              color={colors.white}
              name="shield"
            />
            <Text style={styles.text}>Restore Subscription</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback style={styles.choice}>
          <View style={styles.wrap}>
            <AntIcon
              style={[styles.rate, {backgroundColor: '#498edf'}]}
              size={30}
              color={colors.white}
              name="instagram"
            />
            <Text style={styles.text}>Instagram</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback style={styles.choice}>
          <View style={styles.wrap}>
            <Icon
              style={[styles.rate, {backgroundColor: '#49d964'}]}
              size={30}
              color={colors.white}
              name="typing"
            />
            <Text style={styles.text}>Rate us</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback style={styles.choice} onPress={onLogout}>
          <View style={styles.wrap}>
            <AntIcon
              style={styles.rate}
              size={30}
              color={'#dd051b'}
              name="logout"
            />
            <Text style={styles.text}>Sign Out</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    // alignItems: 'center',
  },
  image: {
    marginHorizontal: '10@s',
    marginTop: '100@s',
    width: '140@s',
    height: '140@s',
    borderRadius: '70@s',
    alignSelf: 'center',
  },
  username: {
    fontSize: '22@s',
    color: colors.originWhite,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: '20@s',
  },
  age: {
    fontSize: '16@s',
    color: colors.textGray,
    textAlign: 'center',
    marginTop: '5@s',
  },
  buttonFill: {
    width: '300@s',
    height: '50@s',
    paddingHorizontal: '10@s',
    marginVertical: '20@s',
    alignSelf: 'center',
  },
  singOutBtn: {
    width: '300@s',
    height: '50@s',
    paddingHorizontal: '10@s',
    marginVertical: '20@s',
    alignSelf: 'center',
    backgroundColor: colors.secondary,
  },
  bottom: {
    flexDirection: 'column',
    marginHorizontal: '25@s',
  },
  wrap: {
    marginVertical: '5@s',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: '14@s',
    color: colors.originWhite,
  },
  rate: {
    height: '30@s',
    width: '30@s',
    borderRadius: '10@s',
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    // alignContent: 'center',
    textAlign: 'center',
    marginRight: '15@s',
  },
});
export default ProfileContainer;
