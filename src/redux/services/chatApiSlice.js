import { TAG_TYPES } from '../../utils/constants/tagTypes';
import { apiSlice } from './api/apiSlice';

export const chatApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query({
      query: () => `/chats`,
      providesTags: [TAG_TYPES.Chat],
    }),
    getChatHistory: builder.query({
      query: (opponentUserId) => `/chats/${opponentUserId}`,
      providesTags: [TAG_TYPES.Chat],
    }),
  }),
});

export const { useGetChatsQuery, useGetChatHistoryQuery } = chatApiSlice;
