import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../state/userSlice';

export const store = configureStore({
  reducer: {
    userData: userSlice,
  },
})
