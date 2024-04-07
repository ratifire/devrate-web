import { createSlice } from '@reduxjs/toolkit';

const initialState = { userId: null, user: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userId = payload.userId;
      state.user = payload.user;
    },
    logOut: (state) => {
      state.userId = null;
      state.user = null;
    },
  },
});
export const { setCredentials, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
