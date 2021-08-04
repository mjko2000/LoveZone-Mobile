import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const Sent = ({message}) => {
  return (
    <View style={styles.container}>
      {/* <linearGradient color={['#f26a50', '#f20045']} style={styles.gradient}>
        <Text style={styles.message}>{message}</Text>
      </linearGradient> */}
      <View style={styles.gradient}>
        <Text style={styles.message}>{message}</Text>
      </View>
      <Text style={styles.duration}>11:59</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    marginVertical: '25@s',
    alignSelf: 'flex-end',
  },
  duration: {
    color: '#b6b6b6',
    fontSize: '11@s',
    marginTop: '5@s',
    alignSelf: 'flex-end',
  },
  gradient: {
    maxWidth: '220@s',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '20@s',
    paddingVertical: '20@s',
    borderToLeftRadius: '25@s',
    borderToRightRadius: '25@s',
    borderBottomLeftRadius: '25@s',
  },
  text: {
    color: '#fff',
  },
});

export default memo(Sent);
