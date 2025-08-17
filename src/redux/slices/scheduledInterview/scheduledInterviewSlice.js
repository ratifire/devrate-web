import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deleteIdItem: null,
  oldEvent: null,
};

const scheduledInterviewSlice = createSlice({
  name: 'scheduledInterview',
  initialState,
  reducers: {
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
export const { setPage, setDeleteIdItem, clearDeleteIdItem } = scheduledInterviewSlice.actions;
