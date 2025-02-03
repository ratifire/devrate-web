import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'modal',
  initialState: {
    opponentUserId: null,
    chat: false,
    list: false,
  },
  reducers: {
    openList: (state) => {
      state.list = true;
    },
    closeList: (state) => {
      state.list = false;
    },
    openChat: (state, action) => {
      const { opponentUserId } = action.payload;
      state.chat = true;
      state.opponentUserId = Number(opponentUserId);
    },
    closeChat: (state) => {
      state.chat = false;
    },
  },
});

export const { openChat, closeChat, openList, closeList } = chatSlice.actions;
export default chatSlice.reducer;
