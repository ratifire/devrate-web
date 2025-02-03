import { apiSlice } from './api/apiSlice';

export const chatApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query({
      query: () => `/chats`,
    }),
    getChatHistory: builder.query({
      query: (opponentUserId) => `/chats/${opponentUserId}`,
    }),
  }),
});

export const { useGetChatsQuery, useGetChatHistoryQuery } = chatApiSlice;
