import React, { memo, useCallback } from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import { scale, ScaledSheet } from 'react-native-size-matters';
import colors from '../../../config/colors';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { launchImageLibrary } from 'react-native-image-picker';
import config from '../../../config/config';
const UploadImage = ({ onSelected, image }) => {
  const onPress = useCallback(() => {
    launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1
    }, ({ didCancel, errorCode, assets }) => {
      if (didCancel || errorCode) return
      onSelected(assets[0])
    })
  }, [])
  return (
    <TouchableHighlight style={styles.container} onPress={onPress}>
      {image ? <Image source={{ uri: config.API_URL + image }} style={styles.image} /> :
        <View style={styles.subContainer}>
          <Icon name='camera-retro' size={scale(50)} color={colors.secondary} />
          <Text style={styles.text}>Your picture</Text>
        </View>
      }
    </TouchableHighlight>
  )
}

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '180@s',
    height: '250@s',
    borderRadius: '20@s',
    padding: '5@s'
  },
  subContainer: {
    flex: 1,
    borderRadius: '15@s',
    borderStyle: 'dashed',
    borderWidth: '2@s',
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: '13@s',
    marginTop: '10@vs',
    color: colors.secondary,
    fontWeight: 'bold'
  },
  image: { flex: 1, borderRadius: '15@s' }
});

export default memo(UploadImage)
