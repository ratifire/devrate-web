import { createSlice } from '@reduxjs/toolkit';
import { DateTime } from 'luxon';

const initialState = {
  popup: {
    visible: false,
    title: '',
    x: 100,
    y: 100,
  },
  from: DateTime.local().startOf('week').toFormat('yyyy-MM-dd'),
  to: DateTime.local().startOf('week').plus({ days: 6 }).toFormat('yyyy-MM-dd'),
  selectedDate: DateTime.local().toISO(),
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
    setSelectedDate: (state, { payload }) => {
      state.selectedDate = payload;
    },
    setDate: (state, { payload }) => {
      state.from = payload.from;
      state.to = payload.to;
    },
    clearState: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export default scheduleSlice.reducer;
export const { setOpenPopup, setClosePopup, setSelectedDate, setDate, clearState } = scheduleSlice.actions;
