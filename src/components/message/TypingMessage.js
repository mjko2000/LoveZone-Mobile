import React, {memo} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IonIcons from 'react-native-vector-icons/Ionicons';

const TypingMessage = ({inputMessage, onSendPress, setMessage}) => {
  return (
    <View style={styles.container}>
      <EntypoIcon name="emoji-happy" size={20} color="#fff" />
      <TextInput
        placeholder="Type message..."
        value={inputMessage}
        onChangeText={setMessage}
        style={styles.input}
      />
      <TouchableOpacity onPress={onSendPress}>
        <IonIcons name="ios-send" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '85%',
    position: 'absolute',
    bottom: '10@s',
    paddingHorizontal: '10@s',
    paddingVertical: '10@s',
    borderRadius: '10@s',
  },
  input: {
    fontSize: '11@s',
    color: '#fff',
    paddingHorizontal: '10@s',
    flex: 1,
  },
});

export default memo(TypingMessage);
