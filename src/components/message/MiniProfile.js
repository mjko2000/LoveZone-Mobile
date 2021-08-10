import React, {memo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const MiniProfile = ({userName, uri, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: uri}} style={styles.avatar} />
        <Text style={styles.name}>{userName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '20@s',
  },
  avatar: {
    width: '60@s',
    height: '60@s',
    borderRadius: '30@s',
  },
  name: {
    marginTop: '10@s',
    fontSize: '11@s',
    color: '#fff',
  },
});

export default memo(MiniProfile);
