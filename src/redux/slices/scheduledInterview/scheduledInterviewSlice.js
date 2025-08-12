import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
  size: 6,
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
  },
});

export default scheduledInterviewSlice.reducer;
export const { setPage, resetPage } = scheduledInterviewSlice.actions;
