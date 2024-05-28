import { createSlice } from '@reduxjs/toolkit';

const picturesSlice = createSlice({
  name: 'pictures',
  initialState: {
    avatar: '',
  },
  reducers: {},
});
export const picturesReducer = picturesSlice.reducer;
