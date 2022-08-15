import { configureStore } from '@reduxjs/toolkit';
import staysReducer from '../features/staysSlice';

export const store = configureStore({
  reducer: {
    stays: staysReducer,
  },
});
