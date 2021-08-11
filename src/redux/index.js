import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import updateProfileFirst from './updateProfileFirstReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    updateProfileFirst
  }
});