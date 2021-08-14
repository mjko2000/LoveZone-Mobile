import config from "../config/config"

export const getFirstImage = (profile) => {
  if(profile.images && profile.images.length){
    return config.API_URL + profile.images[0].url 
  }
  return null
}

export const dateToAge = (t) => {
  const nowDate = new Date().getFullYear();
  const date = new Date(t).getFullYear();
  return nowDate - date;
}