/* eslint-disable react-native/no-inline-styles */
import React, { memo, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Easing } from 'react-native';
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
import {LikeSquare, NopeSquare} from './LikeSquare';
const CardComponent = ({ data, onLeft, onRight, index, activeIndex }) => {
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
    borderColor: interpolateColor(x.value,[-250,0,250],[colors.like,'transparent',colors.nope]),
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
        x.value = withTiming(event.velocityX, { duration: 500, easing: Easing.ease }, () => {
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
  useEffect(() => {
    if (activeIndex === index) {
      animScale.value = withSpring(1);
    } else {
      animScale.value = withSpring(0.9);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);
  return (
    <PanGestureHandler onGestureEvent={eventHandler}>
      <Animated.View style={[styles.container, animStyle]}>
        <LikeSquare x={x} />
        <NopeSquare x = {x} />
        <Text
          style={{
            color: 'white',
          }}>
          {data}
        </Text>
        <Button
          title="pressme"
          onPress={() => {
            // rotateZ.value = 12
          }}
        />
      </Animated.View>
    </PanGestureHandler>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: colors.white,
    borderRadius: scale(10),
    borderWidth: scale(5)
  },

});
export default memo(CardComponent);
