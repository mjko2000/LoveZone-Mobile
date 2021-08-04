/* eslint-disable no-unused-vars */
import React from 'react';
import {View, TouchableNativeFeedback} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import TextField from '../components/custom/TextField';
import MiniCard from '../components/matching/MiniCard';
import {ScrollView} from 'react-native-gesture-handler';

const MatchingContainer = props => {
  const {navigation} = props;
  const userInfo = [
    {
      name: 'Ahhyak',
      age: '20',
      image:
        'https://i.vietgiaitri.com/2018/3/6/anh-the-xinh-lung-linh-cua-co-gai-thai-sieu-nong-bong-142541.jpeg',
    },
    {
      name: 'Duc Anh',
      age: '23',
      image:
        'https://image.freepik.com/free-photo/beautiful-girl-with-cute-face_144627-11578.jpg',
    },
    {
      name: 'Ozawa',
      age: '22',
      image:
        'https://bestwallpapers.net/wp-content/uploads/2020/01/Best-Girl-HD-wallpapers-download-Free-Girl-HD-Wallpapers-21.jpeg',
    },
    {
      name: 'Hiep an cak',
      age: '30',
      image:
        'https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          {/* <Icon
            name="search1"
            size={25}
            color={colors.primary}
            style={{marginLeft: scale(20)}}
          /> */}
          <TextField
            placeholder={'Find matching'}
            placeholderTextColor={colors.gray}
            style={styles.searchText}
          />
        </View>
        <TouchableNativeFeedback>
          <View style={styles.sortButton}>
            <Icon name="menu-fold" size={25} />
          </View>
        </TouchableNativeFeedback>
      </View>
      <ScrollView>
        <View style={styles.imageContainer}>
          <MiniCard children={userInfo[0]} onPress={() => alert('okela')} />
          <MiniCard children={userInfo[1]} />
        </View>
        <View style={styles.imageContainer}>
          <MiniCard children={userInfo[2]} />
          <MiniCard children={userInfo[3]} />
        </View>
        <View style={styles.imageContainer}>
          <MiniCard children={userInfo[0]} />
          <MiniCard children={userInfo[1]} />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: '10@s',
    paddingTop: '50@s',
  },
  header: {
    height: '60@s',
    flexDirection: 'row',
  },
  searchContainer: {
    height: '50@s',
    borderRadius: '10@s',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.textField,
  },
  searchText: {
    borderRadius: moderateScale(5),
    color: colors.white,
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(14),
  },
  sortButton: {
    marginLeft: '10@s',
    height: '50@s',
    width: '50@s',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10@s',
  },
  imageContainer: {
    flexDirection: 'row',
    marginTop: '10@s',
  },
});
export default MatchingContainer;
