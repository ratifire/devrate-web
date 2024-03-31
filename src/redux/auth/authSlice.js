import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: null, token: null, isLoggedIn: false };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { token, user } }) => {
      console.log('in set credentials accessToken', token);

      state.token = token;
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

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
