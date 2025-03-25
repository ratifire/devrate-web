import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popup: {
    visible: false,
    title: '',
    x: 100,
    y: 100,
  },
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setOpenPopup: (state, { payload }) => {
      state.popup = {
        visible: true,
        title: payload.title,
        x: payload.x,
        y: payload.y,
      };
    },
    setClosePopup: (state) => {
      state.popup = initialState.popup;
    },
  },
});

export default scheduleSlice.reducer;
export const { setOpenPopup, setClosePopup } = scheduleSlice.actions;
