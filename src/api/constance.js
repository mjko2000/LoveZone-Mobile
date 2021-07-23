import Config from "react-native-config";
import {accessToken} from '../config/config'

export const withFetch = ({ url, method, body }) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = body ? JSON.stringify(body) : undefined;
  var requestOptions = {
    method: method || "GET",
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  return fetch(Config.API_URL + url, requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.resultCode === 1) return {
        error: false,
        data: result.data,
        message: result.message
      }
      return {
        error: true,
        data: result.data,
        message: result.message
      }
    })
    .catch(error => {
      console.log('error', error)
      return {
        error: true,
        data: null,
        message: "Please check your network"
      }
    });
}

export const withAuth = ({ url, method, body }) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer "+accessToken);
  myHeaders.append("Content-Type", "application/json");
  var raw = body ? JSON.stringify(body) : undefined;
  var requestOptions = {
    method: method || "GET",
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  return fetch(Config.API_URL + url, requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.resultCode === 1) return {
        error: false,
        data: result.data,
        message: result.message
      }
      return {
        error: true,
        data: result.data,
        message: result.message
      }
    })
    .catch(error => {
      console.log('error', error)
      return {
        error: true,
        data: null,
        message: "Please check your network"
      }
    });
}