import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.user = { ...state.user, ...payload };
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});
export const { setCredentials, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
