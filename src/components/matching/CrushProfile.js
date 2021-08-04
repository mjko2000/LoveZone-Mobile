import React, {memo} from 'react';
import {
  View,
  Image,
  TouchableNativeFeedback,
  Dimensions,
  Text,
  ScrollView,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../../config/colors';

const {width, height} = Dimensions.get('screen');
const CrushProfile = ({children, style, onPress}) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>ok</Text>
      </View>
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '10@s',
  },
});

export default memo(CrushProfile);
