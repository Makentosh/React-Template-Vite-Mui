import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

export const defaultSlice = createSlice({
  name: 'default_slice',
  initialState,
  reducers: {},
  extraReducers: {},
});


export const {  } = defaultSlice.actions;

export default defaultSlice.reducer;
