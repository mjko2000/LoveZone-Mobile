import React, {memo} from 'react';
import {
  View,
  Image,
  TouchableNativeFeedback,
  Dimensions,
  Text,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '../../config/colors';

const {width, height} = Dimensions.get('screen');
const MiniCard = ({children, style, onPress}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[styles.imageView, style]}>
        <Image
          style={styles.image}
          source={{uri: children.image}}
          blurRadius={50}
        />
        <View style={styles.title}>
          <Text style={styles.textName}>{children.name}</Text>
          <Text style={styles.textAge}>{children.age}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = ScaledSheet.create({
  imageView: {
    width: width / 2.2,
    height: height / 3,
    marginHorizontal: '5@s',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '10@s',
  },
  title: {
    width: '100%',
    height: '20%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0, 0.3)',
    borderBottomEndRadius: '10@s',
    bottom: 0,
    left: 0,
  },
  textName: {
    fontSize: 20,
    color: colors.originWhite,
    fontWeight: 'bold',
    paddingLeft: '15@s',
  },
  textAge: {
    fontSize: 16,
    paddingLeft: '15@s',
    color: colors.originWhite,
  },
});

export default memo(MiniCard);
