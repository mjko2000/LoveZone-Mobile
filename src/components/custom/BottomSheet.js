import React, { useEffect, useState } from 'react'
import { View, Modal } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Animated, { useSharedValue, withTiming, useDerivedValue, runOnJS, useAnimatedStyle, interpolateColor, interpolate } from 'react-native-reanimated'
import { ScaledSheet } from 'react-native-size-matters'
import colors from '../../config/colors'
const BottomSheet = ({ children, show, setShow, height }) => {
  const [visible, setVisible] = useState(false)
  const showAnim = useSharedValue(0)
  const onShow = () => {
    showAnim.value = withTiming(0, { duration: 500 })
    setVisible(true)
  }
  const onHide = () => {
    showAnim.value = withTiming(500), { duration: 300 }
  }

  const recordResult = result => {
    if (result == 500) setVisible(false);
    // if (result == 1) setVisible(true);
  };

  useDerivedValue(() => {
    runOnJS(recordResult)(showAnim.value);
  });
  useEffect(() => {
    console.log(show)
    show ? onShow() : onHide()
  }, [show])
  const modalStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(showAnim.value, [0, 500], ['#00000060', "#00000000"])
  }))
  const translateY = useAnimatedStyle(() => ({
    transform: [
      { translateY: showAnim.value }
    ]
  }))
  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      onRequestClose = {() => setShow(false)}
    >
      <Animated.View style={[modalStyle, styles.container]}>
        <View style={styles.close} onTouchEnd={() => setShow(false)} />
        <Animated.View
          style={[translateY, styles.content, {height: height}]}
        >
          {/* <View style={styles.activeBar} /> */}
          {children}
        </Animated.View>
      </Animated.View>
    </Modal>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  content: {
    backgroundColor: colors.background,
    width: '100%',
    minHeight: '100@s',
    borderTopLeftRadius: '10@s',
    borderTopRightRadius: '10@s',
    borderColor: colors.primary,
    borderWidth: '2@s',
    padding: '10@s'
  },
  activeBar: {
    position: 'absolute',
    alignSelf: 'center',
    top: '-20@vs',
    width: '50@s',
    height: '8@vs',
    backgroundColor: colors.primary,
    borderRadius: '10@s',
    marginBottom: '10@s'
  },
  close: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent'
  }
})

export default BottomSheet
