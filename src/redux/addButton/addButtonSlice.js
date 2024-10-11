import { createSlice } from '@reduxjs/toolkit';

const buttonSlice = createSlice({
  name: 'button',
  initialState: {
    workExperience: false,
    achievement: false,
    education: false,
    skills: false,
  },
  reducers: {
    setButtonState: (state, action) => {
      const { tab, hasData } = action.payload;
      state[tab] = hasData;
    },
  },
});

export const { setButtonState } = buttonSlice.actions;

export const selectButtonState = (state) => state.button;

export default buttonSlice.reducer;
