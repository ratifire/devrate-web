import { createSlice } from '@reduxjs/toolkit';
import { chatApiSlice } from '@redux/api/slices/chatApiSlice.js';
import { TAG_TYPES } from '@utils/constants/tagTypes.js';

const initialState = {
  opponentUserInfo: {
    id: null,
    firstName: '',
    lastName: '',
    userPicture: null,
  },
  currentUserId: null,
  chat: false,
  list: false,
  badge: true,
  isConnected: false,
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    openBadge: (state) => {
      state.badge = false;
    },
    closeBadge: (state) => {
      state.badge = true;
    },
    openList: (state) => {
      state.list = true;
    },
    closeList: (state) => {
      state.list = false;
    },
    openChat: (state, action) => {
      const { id, firstName, lastName, userPicture } = action.payload;
      state.chat = true;
      state.opponentUserInfo = { id: +id, firstName, lastName, userPicture };
      state.messages = [];
    },
    closeChat: (state) => {
      state.chat = false;
    },
    messagesList: (state, action) => {
      state.messages.push(...action.payload.newMessages);
      chatApiSlice.util.invalidateTags([TAG_TYPES.ChatHistory]);
    },
    connectWebsocket: (state) => {
      state.isConnected = true;
    },
    disconnectWebsocket: (state) => {
      state.isConnected = false;
    },
    submitMessage: () => {
      // Логіка відправки тепер у websocketManager
    },
    setCurrentUser: (state, action) => {
      state.currentUserId = action.payload;
    },
  },
});

export const {
  connectWebsocket,
  disconnectWebsocket,
  submitMessage,
  openBadge,
  messagesList,
  closeBadge,
  openChat,
  closeChat,
  openList,
  closeList,
  setCurrentUser,
} = chatSlice.actions;

export default chatSlice.reducer;
