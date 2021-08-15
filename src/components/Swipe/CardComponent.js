/* eslint-disable react-native/no-inline-styles */
import React, { memo, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Easing, ActivityIndicator } from 'react-native';
import { scale } from 'react-native-size-matters';
import Animated, {
  runOnJS,
  useDerivedValue,
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
  withTiming,
  interpolate,
  interpolateColor,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import colors from '../../config/colors';
import { LikeSquare, NopeSquare } from './LikeSquare';
import CardInfo from './CardInfo';
import { findMatchAPI } from '../../api/matchingAPI';
const CardComponent = ({ data, setData, onLeft, onRight, index, activeIndex }) => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (activeIndex === index) {
      animScale.value = withSpring(1);
    } else {
      animScale.value = withSpring(0.9);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);
  useEffect(() => {
    if (data == null && !loading) {
      setLoading(true)
      //getData
      findMatchAPI().then(({ data, error, message }) => {
        if (error) return alert(message)
        setData(data[0])
      })
      setLoading(false)
      return
    }
  }, [data])

  const startingPosition = 0;
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const opacity = useSharedValue(1);
  const animScale = useSharedValue(1);
  const direction = useSharedValue('none');
  const zIndexAnim = useSharedValue(2 - index);
  const pressed = useSharedValue(false);
  const rotateZ = useSharedValue(0);
  const animStyle = useAnimatedStyle(() => ({
    zIndex: zIndexAnim.value,
    opacity: opacity.value,
    borderColor: interpolateColor(
      x.value,
      [-200, 0, 200],
      [colors.nope, 'transparent', colors.like],
    ),
    transform: [
      { translateX: x.value },
      { translateY: y.value },
      { rotateZ: `${rotateZ.value}deg` },
      { scale: animScale.value },
    ],
  }));
  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
    },
    onActive: (event, ctx) => {
      x.value = startingPosition + event.translationX;
      y.value = startingPosition + event.translationY;
      rotateZ.value = interpolate(event.translationX, [-300, 300], [-15, 15]);
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
      if (event.velocityX < -500) {
        direction.value = 'left';
      }
      if (event.velocityX > 500) {
        direction.value = 'right';
      }
      if (direction.value !== 'none') {
        x.value = withTiming(event.velocityX, { duration: 500 }, () => {
          zIndexAnim.value -= 2;
          opacity.value = 0;
          x.value = withTiming(0, { duration: 10 }, () => {
            opacity.value = withTiming(1);
            rotateZ.value = 0;
          });
          y.value = withTiming(0, { duration: 10 }, () => { });
        });
        return;
      }
      x.value = withSpring(startingPosition);
      rotateZ.value = withSpring(0);
      y.value = withSpring(startingPosition);
    },
  });
  const recordResult = result => {
    if (result == 'left') onLeft(index);
    if (result == 'right') onRight(index);
    direction.value = 'none';
  };

  useDerivedValue(() => {
    runOnJS(recordResult)(direction.value);
  });
  return (
    <PanGestureHandler onGestureEvent={eventHandler}>
      <Animated.View style={[styles.container, animStyle]}>
        {data ? <CardInfo data={data} /> :
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size='large' color={colors.primary} />
          </View>}
        <LikeSquare x={x} />
        <NopeSquare x={x} />
      </Animated.View>
    </PanGestureHandler>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: scale(25),
    borderWidth: scale(5),
  },
});
export default memo(CardComponent);
