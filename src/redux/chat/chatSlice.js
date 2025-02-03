import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'modal',
  initialState: {
    opponentUserInfo: {
      id: null,
      firstName: '',
      lastName: '',
      userPicture: null,
    },
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
      const { id, firstName, lastName, userPicture } = action.payload;
      state.chat = true;
      state.opponentUserInfo.id = id;
      state.opponentUserInfo.firstName = firstName;
      state.opponentUserInfo.lastName = lastName;
      state.opponentUserInfo.userPicture = userPicture;
    },
    closeChat: (state) => {
      state.chat = false;
    },
  },
});

export const { openChat, closeChat, openList, closeList } = chatSlice.actions;
export default chatSlice.reducer;
