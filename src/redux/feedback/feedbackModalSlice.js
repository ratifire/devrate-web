import { createSlice } from '@reduxjs/toolkit';

const feedbackModalSlice = createSlice({
  name: 'feedbackModal',
  initialState: {
    open: false,
    feedbackId: null,
  },
  reducers: {
    openFeedbackModal: (state, { payload }) => {
      state.open = true;
      state.feedbackId = payload;
    },
    closeFeedbackModal: (state) => {
      state.open = false;
      state.feedbackId = null;
    }
  }
});

export const { openFeedbackModal, closeFeedbackModal } = feedbackModalSlice.actions;
export default feedbackModalSlice.reducer;