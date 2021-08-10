import React, {memo} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableNativeFeedback,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {scale, verticalScale} from 'react-native-size-matters';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const DetailScreen = ({navigation, route}) => {
  const avatar =
    'https://image.freepik.com/free-photo/beautiful-girl-with-cute-face_144627-11578.jpg';
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: '100%', paddingTop: scale(40)}}>
        <View style={styles.headerContainer}>
          <TouchableNativeFeedback onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-ios" size={scale(20)} color={colors.white} />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => navigation.goBack()}>
            <EntypoIcon
              name="dots-three-vertical"
              size={scale(20)}
              color={colors.white}
            />
          </TouchableNativeFeedback>
        </View>
        <View style={{alignSelf: 'center'}}>
          <View style={styles.profileImage}>
            <Image
              style={styles.image}
              source={{uri: avatar}}
              resizeMode="center"
            />
          </View>
          <View style={styles.directMessage}>
            <TouchableNativeFeedback onPress={() => alert('ok')}>
              <Icon
                name="message"
                size={scale(36)}
                color={colors.originWhite}
                style={{marginTop: scale(6), marginLeft: scale(2)}}
              />
            </TouchableNativeFeedback>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.textMain}>Duc Anh</Text>
          <Text
            style={
              (styles.textMain,
              {
                color: colors.textGray,
                fontSize: scale(16),
                marginTop: scale(5),
              })
            }>
            Full-stack Developer
          </Text>
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.statusBox}>
            <Text style={[styles.textMain, {fontSize: scale(20)}]}>18 </Text>
            <Text style={styles.textSub}>SUPER LIKES</Text>
          </View>
          <View
            style={[
              styles.statusBox,
              {
                borderLeftWidth: scale(1),
                borderRightWidth: scale(1),
                borderColor: colors.originWhite,
                marginHorizontal: 10,
              },
            ]}>
            <Text style={[styles.textMain, {fontSize: scale(20)}]}>189 </Text>
            <Text style={styles.textSub}>LIKES</Text>
          </View>
          <View style={styles.statusBox}>
            <Text style={[styles.textMain, {fontSize: scale(20)}]}>Gold </Text>
            <Text style={styles.textSub}>MEMBERSHIP</Text>
          </View>
        </View>
        <View style={{marginTop: scale(32)}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: avatar}}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: avatar}}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: avatar}}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: avatar}}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: avatar}}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          </ScrollView>
          <View style={styles.mediaCount}>
            <Text style={{color: colors.textGray}}>15</Text>
            <Text style={{color: colors.textGray}}>Images</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '24@s',
    paddingHorizontal: '10@s',
  },
  profileImage: {
    width: '200@s',
    height: '200@s',
    borderRadius: '100@s',
    overflow: 'hidden',
    backgroundColor: 'red',
  },
  directMessage: {
    backgroundColor: colors.primary,
    position: 'absolute',
    bottom: '0@s',
    right: '0@s',
    width: '60@s',
    height: '60@s',
    borderRadius: '30@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '16@s',
  },
  textMain: {
    color: colors.originWhite,
    fontWeight: '400',
    fontSize: '26@s',
  },
  textSub: {
    color: colors.textGray,
    fontSize: '12@s',
    fontWeight: '500',
  },
  statusContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '30@s',
  },
  statusBox: {
    alignItems: 'center',
    flex: '1@s',
  },
  imageContainer: {
    width: '180@s',
    height: '200@s',
    borderRadius: '12@s',
    overflow: 'hidden',
    marginHorizontal: '10@s',
    backgroundColor: 'blue',
  },
});

export default memo(DetailScreen);
