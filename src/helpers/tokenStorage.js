import config from "../config/config"
import AsyncStorage from "@react-native-async-storage/async-storage"
export const saveUserToken = async ({accessToken, isRemember}) => {
  config.accessToken = accessToken;
  if (isRemember) await AsyncStorage.setItem('accessToken', config.accessToken);
    else await AsyncStorage.removeItem('accessToken');
}
export const removeUserToken = async () => {
  config.accessToken = '';
  await AsyncStorage.removeItem('accessToken');
}