import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: null, token: null, isLoggedIn: false };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { accessToken, user } }) => {
      console.log('in set credentials', accessToken);
      state.token = accessToken;
      state.user = user;
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.token = null;
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
