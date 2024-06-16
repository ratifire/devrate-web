import { createSlice } from '@reduxjs/toolkit';

const personalSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    city: '',
    country: '',
    status: '',
    aboutMe: '',
  },
  reducers: {},
});
export const personalReducer = personalSlice.reducer;
