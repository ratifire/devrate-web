import { apiSlice } from '@redux/api/apiSlice.js';
import { TAG_TYPES } from '@utils/constants/tagTypes.js';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postContactsUser: builder.mutation({
      query: ({ userId, body }) => ({
        url: `/users/${userId}/contacts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [TAG_TYPES.ContactList],
    }),

    getUserContacts: builder.query({
      query: (userId) => `/users/${userId}/contacts`,
      transformResponse: (response) => {
        return response.filter((item) => item.value?.length);
      },
      providesTags: () => [TAG_TYPES.ContactList],
    }),
  }),
});

export const { useGetUserContactsQuery, usePostContactsUserMutation } = userApiSlice;
