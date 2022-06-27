import { configureStore } from '@reduxjs/toolkit';
import defaultSlice from '../slices/defaultSlice';

export const store = configureStore({
  reducer: {
    default: defaultSlice
  },
});
