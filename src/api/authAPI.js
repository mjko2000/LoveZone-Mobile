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

export const signInAPI = input => {
  return withFetch({url: 'auth/signin', method: 'POST', body: input});
};
