import React, {memo} from 'react';
import {View, Text, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const Received = ({image, message}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.duration}>12:13</Text>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: '20@s',
    width: '250@s',
  },
  image: {
    width: '40@s',
    height: '40@s',
    borderRadius: '20@s',
  },
  message: {
    fontSize: '13@s',
    marginHorizontal: '15@s',
  },
  duration: {
    color: '#b6b6b6',
    fontSize: '11@s',
    marginTop: '5@s',
    marginHorizontal: '15@s',
  },
});

export default memo(Received);
