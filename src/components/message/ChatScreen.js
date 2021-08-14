import React, {useState, memo, useEffect, useRef, createRef} from 'react';
import {View, Text, Image, TouchableNativeFeedback} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ScaledSheet} from 'react-native-size-matters';
import {scale, verticalScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../config/colors';
import Received from './Received';
import Sent from './Sent';
import LastWatch from './LastWatch';
import TypingMessage from './TypingMessage';

const ChatScreen = ({navigation}) => {
  //   const {userName, userAvatar, ItemID} = route.params;
  const messageRef = useRef();
  const userName = 'tai';
  const userAvatar =
    'https://i.vietgiaitri.com/2018/3/6/anh-the-xinh-lung-linh-cua-co-gai-thai-sieu-nong-bong-142541.jpeg';
  const [inputMessage, setInputMessage] = useState('');
  useEffect(() => {
    messageRef?.current.scrollToEnd();
    navigation.setOptions({
      headerTitle: 'Username',
    });
  }, []);
  const DataMessage = [
    {
      id: 1,
      message: 'Wuz Up! Lorem ipsum is simply dummy text of',
    },
    {
      id: 2,
      message: 'How are you ? =)',
    },
    {
      id: 3,
      message:
        'It has servived not only five centuries but also the leap of electronic type setting',
    },
    {
      id: 4,
      message: 'Contrary to popular beleif . Lorem ipsum is not random text  ',
    },
    {
      id: 5,
      message: 'Hi, i want to see you!',
    },
    {
      id: 6,
      message: 'See you soon',
    },
    {
      id: 7,
      message: 'Richard Mc Cal, a Latin professor',
    },
    {
      id: 8,
      message: 'Goodbye',
    },
  ];
  const send = () => {
    DataMessage.push({id: inputMessage, message: inputMessage});
  };

  let text = [];
  for (let i = 1; i < DataMessage.length; i++) {
    text.push(
      <Sent key={DataMessage[i].id} message={DataMessage[i].message} />,
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false} ref={messageRef}>
          <LastWatch checkedOn="Yesterday" />
          <Received image={userAvatar} message={DataMessage[0].message} />
          <Sent message={DataMessage[1].message} />
          <Received image={userAvatar} message={DataMessage[2].message} />
          <Sent message={DataMessage[3].message} />
          <Received image={userAvatar} message={DataMessage[3].message} />
          <Sent message={DataMessage[5].message} />
          <Received image={userAvatar} message={DataMessage[6].message} />
          <Sent message={DataMessage[7].message} />
          <View>{text}</View>
        </ScrollView>
      </View>
      <TypingMessage
        inputMessage={inputMessage || ''}
        setMessage={inputMessage => setInputMessage(inputMessage.target.value)}
        onSendPress={send}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: colors.primary,
  },
  main: {
    backgroundColor: colors.background,
    height: '85%',
    paddingHorizontal: '10@s',
    borderBottomLeftRadius: '35@s',
    borderBottomRightRadius: '35@s',
  },
  userName: {
    fontSize: '20@s',
    textAlign: 'center',
    flex: '1@s',
    color: colors.originWhite,
  },
  avatar: {
    height: '40@s',
    width: '40@s',
    borderRadius: '20@s',
  },
});

export default memo(ChatScreen);
