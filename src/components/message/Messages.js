import React, {memo} from 'react';
import {View, Text, TouchableOpacity, Image, Platform} from 'react-native';
import {color} from 'react-native-reanimated';
import {scale, ScaledSheet} from 'react-native-size-matters';
import colors from '../../config/colors';

const randomTime = () => {
  const hours = Math.round(Math.random() * 12);
  const minutes = Math.round(Math.random() * 60);
  const hFormat = ('0' + hours).slice(-2);
  const minFormat = ('0' + minutes).slice(-2);
  return String(hFormat + minFormat);
};

const Messages = ({userName, count, uri, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {count > 0 ? (
        <View style={styles.gradientStyle}>
          <Text style={{color: 'white'}}>{count}</Text>
        </View>
      ) : null}
      <Image source={{uri: uri}} style={styles.image} />
      <View style={{marginLeft: scale(10)}}>
        <Text style={styles.username}>{userName}</Text>
        <Text style={styles.text}>Hello, How are you?</Text>
      </View>
      <Text style={styles.duration}>{randomTime()}</Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: '20@s',
    alignItems: 'center',
    marginTop: '30@s',
  },
  gradientStyle: {
    height: '30@s',
    width: '30@s',
    borderRadius: '15@s',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20@s',
    backgroundColor: colors.primary,
    position: 'absolute',
    left: 70,
    top: -10,
    zIndex: 1000,
  },
  image: {
    width: '60@s',
    height: '60@s',
    borderRadius: '30@s',
  },
  username: {
    color: '#b6b6b6',
    fontSize: '11@s',
  },
  duration: {
    color: colors.textGray,
    fontSize: '12@s',
    flex: 1,
    marginLeft: '280@s',
    position: 'absolute',
  },
  text: {
    color: colors.textGray,
  },
});

export default memo(Messages);
