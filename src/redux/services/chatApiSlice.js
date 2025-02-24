import { TAG_TYPES } from '../../utils/constants/tagTypes';
import { apiSlice } from './api/apiSlice';

export const chatApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query({
      query: () => `/chats`,
      providesTags: [TAG_TYPES.Chat, TAG_TYPES.ChatHistory],
    }),
    getChatHistory: builder.query({
      query: ({ opponentUserId, page, size }) => `/chats/${opponentUserId}?page=${page}&size=${size}`,
      providesTags: [TAG_TYPES.Chat],
    }),
  }),
});

export const { useGetChatsQuery, useGetChatHistoryQuery } = chatApiSlice;
