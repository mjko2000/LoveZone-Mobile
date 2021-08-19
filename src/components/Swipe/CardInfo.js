import React, { useCallback, useState } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, Dimensions, ImageStore } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import colors from '../../config/colors'
import helpers from '../../helpers'
import ImageDot from './ImageDot'
import InfoIconButton from './InfoIconButton';
import NavigationService from '../../helpers/NavigationService' 
const { width: screenWidth } = Dimensions.get('window')
const userProfile = {
  displayName: "Taylor Heluis",
  address: "HCM, Viet Nam",
  old: 22,
  images: [
    "https://i.vietgiaitri.com/2018/3/6/anh-the-xinh-lung-linh-cua-co-gai-thai-sieu-nong-bong-142541.jpeg",
    "https://image.freepik.com/free-photo/beautiful-girl-with-cute-face_144627-11578.jpg",
    "https://bestwallpapers.net/wp-content/uploads/2020/01/Best-Girl-HD-wallpapers-download-Free-Girl-HD-Wallpapers-21.jpeg",
    "https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  ]
}
const CardInfo = ({data}) => {
  const [imageIndex, setImageIndex] = useState(0)
  const onPress = useCallback((e) => {
    const posX = e.nativeEvent.locationX
    if (posX < screenWidth / 2) {
      if (imageIndex <= 0) return
      setImageIndex(index => index - 1)
    }
    if (posX > screenWidth / 2) {
      if (imageIndex >= data?.images.length - 1) return
      setImageIndex(index => index + 1)
      Image.prefetch(data?.images[imageIndex + 1])
    }
  }, [imageIndex])
  return (
    <View style={styles.container}>
      <ImageDot length={data?.images.length} activeIndex={imageIndex} />
      <TouchableWithoutFeedback
        onPress={onPress}
      >
        <Image
          style={styles.image}
          source={{ uri: helpers.getFirstImage(data) }}
          // onLoadStart={() => console.log("Loading")}
          // onLoadEnd={() => console.log("Load done")}
        />
      </TouchableWithoutFeedback>
      <View style={styles.bio}>
        <View style = {{flex: 2, justifyContent: 'center'}}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.name}>{data?.name}   </Text>
            <Text style={styles.name}>{helpers.dateToAge(data?.birth)}</Text>
          </View>
          <Text style={styles.locationText}>{`${Math.round(data?.distance) == 0 ? "Nearby" : (Math.round(data?.distance) + " km")} - ${data?.location?.address}`}</Text>
        </View>
        <View style = {{flex: 1}}>
          <InfoIconButton 
            onPress = {() => NavigationService.showProfileModal(data)}
          />
        </View>
      </View>
    </View>
  )
}
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: '20@s'
  },
  image: {
    flex: 7,
    borderRadius: '18@s',
  },
  bio: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: '12@s',
  },
  name: {
    fontSize: '19@vs',
    fontWeight: 'bold',
    marginBottom: '6@vs',
    color: colors.darkGray,
  },
  locationText: {
    color: colors.gray,

  }
})
export default CardInfo
