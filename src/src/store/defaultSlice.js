import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const defaultSlice = createSlice({
  name: 'default_slice',
  initialState,
  reducers: {
    testReducer: (state, action) => {
      console.log(state, action);
    },
  },
  extraReducers: {},
});

export const { testReducer } = defaultSlice.actions;

export default defaultSlice.reducer;
