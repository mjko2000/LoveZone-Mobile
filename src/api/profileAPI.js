import { withAuth } from './constance';

export const getListFavorites = () => {
  return withAuth({ url: 'profile/getListFavorite', method: 'GET' });
};

export const uploadImageAPI = (image) => {
  var formdata = new FormData();
  formdata.append("image", {uri: image.uri, name: image.fileName, type: image.type});
  return withAuth({ url: 'profile/uploadImage', method: 'POST', body: formdata, isFormData: true });
};

export const updateFirstProfile = (input) => {
  return withAuth({ url: 'profile/firstProfile', method: 'POST', body: input });
};
