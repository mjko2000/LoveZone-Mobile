import React, {memo} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {color} from 'react-native-reanimated';

const Header = ({navigation, route}) => {
  // const {userName} = route;
  return (
    // <View style={{height: 100, backgroundColor: 'red'}}>

    // </View>
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-ios" size={scale(20)} color={colors.white} />
      </TouchableNativeFeedback>
      {/* <TouchableNativeFeedback onPress={() => navigation.goBack()}>
        <EntypoIcon
          name="dots-three-vertical"
          size={scale(20)}
          color={colors.white}
        />
      </TouchableNativeFeedback> */}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.background,
    height: '60@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '10@s',
    paddingTop: 20,
  },
  headerContainer: {},
});

export default Header;
