import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  idToken: null,
  authToken: null,
  isAuth: false,
};

const tokenSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setTokens: (state, { payload }) => {
      state.idToken = payload.idToken;
      state.authToken = payload.authToken;
      state.isAuth = true;
    },
    clearTokens: (state) => {
      state.idToken = null;
      state.authToken = null;
      state.isAuth = false;
    },
  },
});

export const { setTokens, clearTokens } = tokenSlice.actions;

export default tokenSlice.reducer;
