/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, { memo } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableNativeFeedback,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scale, verticalScale } from 'react-native-size-matters';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../helpers/NavigationService';
import helpers from '../../helpers';

const DetailScreen = ({ navigation, route }) => {
  const profile = route.params;
  const user = {
    id: 1,
    name: 'Ahihi haha',
    age: '20',
    image:
      'https://i.vietgiaitri.com/2018/3/6/anh-the-xinh-lung-linh-cua-co-gai-thai-sieu-nong-bong-142541.jpeg',
  };
  const arrs = [
    'swimming',
    'swimming',
    'swimming',
    'swimming',
    'swimming',
    'swimming',
    'swimming',
    'swimming',
  ];
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: '100%', paddingTop: scale(10) }}>
        <View style={{ alignSelf: 'center' }}>
          <Image
            style={styles.mainImage}
            width={scale(200)}
            height={scale(200)}
            source={{ uri: helpers.getFirstImage(profile) }}
            resizeMode="cover"
          />
          <View style={styles.directMessage}>
            <TouchableNativeFeedback
              onPress={() =>
                NavigationService.showMessage()
              }>
              <Icon
                name="message"
                size={scale(36)}
                color={colors.originWhite}
                style={{ marginTop: scale(6), marginLeft: scale(2) }}
              />
            </TouchableNativeFeedback>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.textMain}>{profile.name}</Text>
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
            <Text style={[styles.textMain, { fontSize: scale(20) }]}>18 </Text>
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
            <Text style={[styles.textMain, { fontSize: scale(20) }]}>189 </Text>
            <Text style={styles.textSub}>LIKES</Text>
          </View>
          <View style={styles.statusBox}>
            <Text style={[styles.textMain, { fontSize: scale(20) }]}>{profile?.images.length}</Text>
            <Text style={styles.textSub}>IMGAES</Text>
          </View>
        </View>
        <View style={{ marginTop: scale(32) }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: user.image }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: user.image }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: user.image }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: user.image }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: user.image }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          </ScrollView>
          {/* <View style={styles.mediaCount}>
            <Text style={{color: colors.textGray}}>15</Text>
            <Text style={{color: colors.textGray}}>Images</Text>
          </View> */}
        </View>
        <View style={{ paddingHorizontal: scale(10), marginTop: scale(20) }}>
          <Text
            style={{
              fontSize: 24,
              color: colors.originWhite,
              paddingBottom: scale(10),
            }}>
            About
          </Text>
          <Text
            style={[
              styles.textSub,
              {
                overflow: 'scroll',
                fontSize: scale(16),
              },
            ]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
        </View>
        <View style={{ paddingHorizontal: scale(10), marginTop: scale(20) }}>
          <Text
            style={{
              fontSize: 24,
              color: colors.originWhite,
              paddingBottom: scale(10),
            }}>
            Information
          </Text>
          <View
            style={{
              paddingTop: scale(5),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={[
                styles.textMain,
                {
                  fontSize: scale(16),
                },
              ]}>
              Height:
            </Text>
            <Text
              style={[
                styles.textSub,
                {
                  fontSize: scale(16),
                  paddingHorizontal: scale(5),
                },
              ]}>
              {Math.round(profile?.height)}cm
            </Text>
          </View>
          <View
            style={{
              paddingTop: scale(5),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={[
                styles.textMain,
                {
                  fontSize: scale(16),
                },
              ]}>
              Weight:
            </Text>
            <Text
              style={[
                styles.textSub,
                {
                  fontSize: scale(16),
                  paddingHorizontal: scale(5),
                },
              ]}>
              {Math.round(profile?.weight)}kg
            </Text>
          </View>
          <View
            style={{
              paddingTop: scale(5),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {profile.workAt ?
              <Text
                style={[
                  styles.textMain,
                  {
                    fontSize: scale(16),
                  },
                ]}>
                Work at:
                <Text
                  style={[
                    styles.textSub,
                    {
                      fontSize: scale(16),
                      paddingHorizontal: scale(5),
                    },
                  ]}>
                  {profile.workAt}
                </Text>
              </Text> : null}
          </View>
        </View>
        <View style={{ paddingHorizontal: scale(10), marginTop: scale(20) }}>
          <Text
            style={{
              fontSize: 24,
              color: colors.originWhite,
              paddingBottom: scale(10),
            }}>
            Interesting
          </Text>
          <View style={styles.scrollView}>
            {arrs.map(item => (
              <View style={[styles.chip, styles.chipActive]}>
                <Text style={[styles.content, { color: colors.white }]}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={[styles.textSub, styles.recent]}>Recent Activity</Text>
        <View style={{ alignItems: 'center' }}>
          <View stlye={styles.recentItem}>
            <View style={styles.recentIndicator}></View>
            <View style={{ width: scale(250) }}>
              <Text style={styles.textNormal}>
                Working at Nguyen Tat Thanh University
              </Text>
            </View>
          </View>
          <View stlye={styles.recentItem}>
            <View style={styles.recentIndicator} />
            <View style={{ width: scale(250) }}>
              <Text style={styles.textNormal}>
                Working at Nguyen Tat Thanh University
              </Text>
            </View>
          </View>
          <View stlye={styles.recentItem}>
            <View style={styles.recentIndicator} />
            <View style={{ width: scale(250) }}>
              <Text style={styles.textNormal}>
                Working at Nguyen Tat Thanh University
              </Text>
            </View>
          </View>
          <View stlye={styles.recentItem}>
            <View style={styles.recentIndicator} />
            <View style={{ width: scale(250) }}>
              <Text style={styles.textNormal}>Working at</Text>
              <Text style={styles.textNormal}>Nguyen Tat Thanh University</Text>
            </View>
          </View>
          <View stlye={styles.recentItem}>
            <View style={styles.recentIndicator} />
            <View style={{ width: scale(250) }}>
              <Text style={styles.textNormal}>
                Working at Nguyen Tat Thanh University
              </Text>
            </View>
          </View>
          <View stlye={styles.recentItem}>
            <View style={styles.recentIndicator} />
            <View style={{ width: scale(250) }}>
              <Text style={styles.textNormal}>
                Working at Nguyen Tat Thanh University
              </Text>
            </View>
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
  mainImage: {
    borderRadius: '100@s',
  },
  directMessage: {
    backgroundColor: colors.primary,
    position: 'absolute',
    bottom: '0@s',
    right: '0@s',
    width: '50@s',
    height: '50@s',
    borderRadius: '25@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '16@s',
  },
  textNormal: {
    color: colors.originWhite,
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
  image: {
    width: '180@s',
    height: '200@s',
    borderRadius: '12@s',
  },
  mediaCount: {
    position: 'absolute',
    backgroundColor: colors.primary,
    top: '50%',
    marginTop: '-50@s',
    marginLeft: '30@s',
    width: '100@s',
    height: '100@s',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10@s',
    shadowColor: 'rgba(0,0,0,0.38)',
    shadowOffset: { width: 0, height: '10@s' },
    shadowRadius: '20@s',
    opacity: '1@s',
  },
  recent: {
    marginLeft: '78@s',
    marginTop: '32@s',
    marginBottom: '6@s',
    fontSize: '10@s',
  },
  recentItem: {
    display: 'flex',
    // alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: '16@s',
    width: '100%',
  },
  recentIndicator: {
    backgroundColor: colors.textGray,
    padding: '4@s',
    height: '10@s',
    width: '10@s',
    borderRadius: '5@s',
    marginTop: '3@s',
    marginRight: '15@s',
  },

  chip: {
    backgroundColor: colors.textField,
    height: '30@s',
    borderRadius: '15@s',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '5@s',
    borderWidth: '1@s',
    borderColor: 'transparent',
  },
  chipActive: {
    borderColor: colors.primary,
  },
  content: {
    textAlign: 'center',
    marginHorizontal: '15@s',
  },

  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'stretch',
  },
});

export default memo(DetailScreen);
