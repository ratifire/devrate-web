import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
  size: 6,
  deleteIdItem: null,
  oldEvent: null,
};

const scheduledInterviewSlice = createSlice({
  name: 'scheduledInterview',
  initialState,
  reducers: {
    setPage: (state) => {
      state.page += 1;
    },
    resetPage: (state) => {
      state.page = 0;
    },
    setDeleteIdItem: (state, { payload }) => {
      state.deleteIdItem = payload.deleteIdItem;
      state.oldEvent = payload.oldEvent;
    },
    clearDeleteIdItem: (state) => {
      state.deleteIdItem = null;
      state.oldEvent = null;
    },
  },
});

export default scheduledInterviewSlice.reducer;
export const { setPage, resetPage, setDeleteIdItem, clearDeleteIdItem } = scheduledInterviewSlice.actions;
