import {createSlice} from "@reduxjs/toolkit";
import { DARK_THEME, LIGHT_THEME } from '../../utils/constants/theme';

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
	},
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
