import {removeUserToken, saveUserToken} from './tokenStorage'
import {getFirstImage, dateToAge, toFullImageLink} from './profile'
import {getCurrentLocation, toDistance} from './location'

export default Helper = {
  removeUserToken,
  saveUserToken,
  getFirstImage,
  dateToAge,
  getCurrentLocation,
  toFullImageLink,
  toDistance
}