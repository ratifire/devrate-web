import { createSlice } from '@reduxjs/toolkit';

const avatarSlice = createSlice({
  name: 'avatar',
  initialState: {
    avatar: '',
  },
  reducers: {},
});
export const avatarReducer = avatarSlice.reducer;
