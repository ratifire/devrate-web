import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'modal',
  initialState: {
    chat: false,
    list: false,
  },
  reducers: {
    openChat: (state, action) => {
      const { chatElement } = action.payload;
      state[chatElement] = true;
    },
    closeChat: (state, action) => {
      const { chatElement } = action.payload;
      state[chatElement] = false;
    },
  },
});

export const { openChat, closeChat } = chatSlice.actions;
export default chatSlice.reducer;
