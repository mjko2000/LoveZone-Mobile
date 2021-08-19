import { withAuth } from './constance';

export const findMatchAPI = () => {
  return withAuth({ url: 'matching/findMatch', method: 'GET' });
};

export const likeAPI = (likeID) => {
  return withAuth({ url: 'matching/like', method: 'POST', body: {likeID} });
};