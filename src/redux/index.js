import { configureStore } from '@reduxjs/toolkit';
import userProfile from './userProfileReducer';
import updateProfileFirst from './updateProfileFirstReducer';

export const store = configureStore({
  reducer: {
    userProfile,
    updateProfileFirst
  }
});