import { withAuth } from './constance';

export const findMatchAPI = () => {
  return withAuth({ url: 'matching/findMatch', method: 'GET' });
};