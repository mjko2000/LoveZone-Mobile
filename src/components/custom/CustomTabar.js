import React, {useEffect, memo} from 'react';
import {View, Text, Dimensions, TouchableNativeFeedback} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';
const {width: screenWidth} = Dimensions.get('window');
const tabWidth = screenWidth / 4;
const CustomTabar = props => {
  const {state, navigation, activeTintColor, inactiveTintColor, style} = props;
  const {index: activeIndex, routes} = state;
  const animCirle = useSharedValue(0);
  useEffect(() => {
    animCirle.value = withTiming(tabWidth * activeIndex);
  }, [activeIndex]);
  const animStyle = useAnimatedStyle(() => ({
    transform: [{translateX: animCirle.value}],
  }));
  return (
    <View style={[styles.container, style]}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: -verticalScale(15),
            width: tabWidth,
            height: tabWidth,
            borderRadius: tabWidth / 2,
            backgroundColor: colors.header,
          },
          animStyle,
        ]}
      />
      {routes.map((item, index) => {
        return (
          <TabItem
            {...item}
            navigation={navigation}
            activeIndex={activeIndex}
            index={index}
            activeTintColor={activeTintColor}
            inactiveTintColor={inactiveTintColor}
          />
        );
      })}
    </View>
  );
};

const TabItem = memo(
  ({
    key,
    name,
    params,
    index,
    activeIndex,
    navigation,
    activeTintColor,
    inactiveTintColor,
  }) => {
    const anim = useSharedValue(1);
    const animY = useSharedValue(0);
    const animStyle = useAnimatedStyle(() => ({
      transform: [{scale: anim.value}, {translateY: animY.value}],
    }));
    const isActive = activeIndex === index;
    useEffect(() => {
      if (isActive) {
        anim.value = withSpring(1.4);
        setTimeout(() => {
          animY.value = withSpring(-verticalScale(10));
        }, 100);
      } else {
        anim.value = withSpring(1);
        animY.value = withSpring(0);
      }
    }, [activeIndex]);
    return (
      <TouchableNativeFeedback onPress={() => navigation.navigate(name)}>
        <View style={styles.tab}>
          <Animated.View style={[animStyle]}>
            <Icon
              name={mapNameToIconName(name)}
              size={scale(26)}
              color={isActive ? activeTintColor : inactiveTintColor}
            />
          </Animated.View>
          <Text
            style={{
              fontSize: scale(10),
              textAlign: 'center',
              color: isActive ? activeTintColor : inactiveTintColor,
            }}>
            {name}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  },
);
const mapNameToIconName = name => {
  switch (name) {
    case 'Profile':
      return 'person';
    case 'Home':
      return 'home';
    case 'Matching':
      return 'notifications';
    case 'Message':
      return 'ios-chatbubble-ellipses';
  }
};
const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: verticalScale(60),
  },
  tab: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CustomTabar;
