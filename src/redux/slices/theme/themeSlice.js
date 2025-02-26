import { createSlice } from '@reduxjs/toolkit';
import { DARK_THEME, LIGHT_THEME } from '@utils/constants/Theme/theme.js';

const initialState = {
  mode: DARK_THEME,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    },
    setDarkTheme: (state) => {
      state.mode = DARK_THEME;
    },
  },
});

export const { toggleTheme, setDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;
