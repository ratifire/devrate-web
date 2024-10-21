import {createSlice} from "@reduxjs/toolkit";
import { DARK_THEME, LIGHT_THEME } from '../../utils/constants/Theme/theme';

const initialState = {
	mode: localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')).mode : DARK_THEME,
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.mode = state.mode === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
			localStorage.setItem('theme', JSON.stringify({ mode: state.mode }));
		},
	},
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
