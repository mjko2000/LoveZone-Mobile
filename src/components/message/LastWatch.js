import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const LastWatch = ({checkedOn}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{checkedOn}</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#fff',
    elevation: '3@s',
    paddingVertical: '2@s',
    paddingHorizontal: '15@s',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: '15@s',
    width: '100@s',
    marginTop: '25@s',
  },
  text: {
    fontSize: '12@s',
    color: '#f20045',
  },
});

export default memo(LastWatch);
