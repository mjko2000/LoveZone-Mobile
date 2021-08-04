/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableNativeFeedback,
  Image,
  Animated,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import ButtonFill from '../components/custom/ButtonFill';
import {CommonActions} from '@react-navigation/native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../config/colors';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Messages from '../components/message/Messages';
import MiniProfile from '../components/message/MiniProfile';
import {ScrollView} from 'react-native-gesture-handler';

const MessageContainer = props => {
  const {navigation} = props;
  const URL = '';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const userInfo = [
    {
      id: 1,
      name: 'Ahhyak',
      age: '20',
      image:
        'https://i.vietgiaitri.com/2018/3/6/anh-the-xinh-lung-linh-cua-co-gai-thai-sieu-nong-bong-142541.jpeg',
    },
    {
      id: 2,
      name: 'Duc Anh',
      age: '23',
      image:
        'https://image.freepik.com/free-photo/beautiful-girl-with-cute-face_144627-11578.jpg',
    },
    {
      id: 3,
      name: 'Ozawa',
      age: '22',
      image:
        'https://bestwallpapers.net/wp-content/uploads/2020/01/Best-Girl-HD-wallpapers-download-Free-Girl-HD-Wallpapers-21.jpeg',
    },
    {
      id: 4,
      name: 'Hiep an cak',
      age: '30',
      image:
        'https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 5,
      name: 'tai',
      age: '30',
      image:
        'https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 6,
      name: 'tai ngu',
      age: '30',
      image:
        'https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 7,
      name: 'kiet thai',
      age: '30',
      image:
        'https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const pan = useRef(new Animated.ValueXY()).current;
  const list = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    // const getData = async () => {
    //   const res = await fetch(URL);
    //   const data = await res.json();
    //   setData(data);
    //   setLoading(false);
    // };
    // getData();

    Animated.timing(pan, {
      toValue: {x: 400, y: 100},
      delay: 1000,
      useNativeDriver: false,
    });

    Animated.timing(list, {
      toValue: {x: 0, y: 400},
      delay: 2000,
      useNativeDriver: false,
    });
  }, []);

  return (
    // <linearGradient
    //   style={styles.gradient}
    //   color={['#f26a50', '#f20042', '#f20045']}></linearGradient>
    <View style={styles.gradient}>
      <View style={styles.headersContainer}>
        <Text style={styles.header}>Message</Text>
        <TouchableNativeFeedback onPress={() => alert('ok')}>
          <MaterialIcon
            name="add"
            color={colors.originWhite}
            size={scale(30)}
          />
        </TouchableNativeFeedback>
      </View>
      <ScrollView
        horizontal
        style={styles.proContainer}
        showsHorizontalScrollIndicator={false}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.originWhite} />
        ) : (
          <Animated.View style={[pan.getLayout(), styles.card]}>
            {userInfo.map((item, index) => (
              <MiniProfile
                key={item.id}
                userName={item.name}
                uri={item.image}
              />
            ))}
          </Animated.View>
        )}
      </ScrollView>
      <View style={styles.ops}>
        <View style={styles.col}>
          <Text style={styles.day}>Monday</Text>
          <TouchableNativeFeedback onPress={() => alert('dd')}>
            <EntypoIcon
              name="dots-three-horizontal"
              color={colors.originWhite}
              size={scale(30)}
            />
          </TouchableNativeFeedback>
        </View>
        <ScrollView>
          {loading ? (
            <ActivityIndicator size="large" color={'#f20042'} />
          ) : (
            <Animated.View style={[list.getLayout(), styles.lists]}>
              {userInfo.map((item, index) => (
                <Messages
                  key={item.id}
                  count={Math.floor(Math.random() * 3)}
                  userName={item.name}
                  uri={item.image}
                  onPress={() => console.log('Ok')}
                />
              ))}
            </Animated.View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = ScaledSheet.create({
  gradient: {
    height: '100%',
    backgroundColor: colors.primary,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    paddingTop: '20@s',
    paddingHorizontal: '10@s',
  },
  headersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    fontSize: '24@s',
    flex: 1,
    color: colors.originWhite,
  },
  proContainer: {
    alignSelf: 'center',
  },
  lists: {
    marginBottom: '20@s',
  },
  card: {
    width: '400@s',
    flexDirection: 'row',
  },
  ops: {
    borderTopLeftRadius: '40@s',
    borderTopRightRadius: '40@s',
    height: '450@s',
    backgroundColor: colors.background,
    marginHorizontal: '-20@s',
  },
  col: {
    marginHorizontal: '20@s',
    flexDirection: 'row',
    marginTop: '25@s',
    alignItems: 'center',
  },
  day: {
    color: colors.originWhite,
    fontSize: '20@s',
    flex: 1,
  },
});
export default MessageContainer;
