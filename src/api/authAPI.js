import {withFetch} from './constance';

export const signUpAPI = input => {
  return withFetch({url: 'auth/signup', method: 'POST', body: input});
};
export const activeOtpAPI = ({uid, otp}) => {
  return withFetch({
    url: 'auth/activeWithOtp',
    method: 'POST',
    body: {uid, otp},
  });
};

export const signInAPI = ({email, password}) => {
  return withFetch({url: 'auth/signin', method: 'POST', body: {email, password}});
};

export const signInFromTokenAPI = (token) => {
  return withFetch({url: 'auth/signInFromToken', method: 'POST', body: {accessToken: token}});
};
