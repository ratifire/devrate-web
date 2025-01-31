import { TAG_TYPES } from '../../utils/constants/tagTypes';
import { apiSlice } from './api/apiSlice';

export const chatApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChat: builder.query({
      query: (userId) => `/users/${userId}/chat`,
      providesTags: [TAG_TYPES.Chat],
      transformResponse(response) {
        return response;
      },
    }),
  }),
});
