import Geolocation from '@react-native-community/geolocation';

export const getCurrentLocation = async () => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(info => {
      console.log(info)
      if(!info.coords) return reject()
      resolve({
        longitude: info.coords.longitude,
        latitude: info.coords.latitude
      })
    });
  })
}