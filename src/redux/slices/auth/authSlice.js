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
    toggleSubscribedEmailNotification: (state) => {
      state.user.data.subscribed = !state.user.data.subscribed;
    },
  },
});
export const { setCredentials, logOut, toggleSubscribedEmailNotification } = authSlice.actions;
export const authReducer = authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
