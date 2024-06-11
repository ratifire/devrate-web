import { apiSlice } from '../../services/api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postContactsUser: builder.mutation({
      query: ({ userId, body }) => ({
        url: `/users/${userId}/contacts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: (result, error, { userId }) => [{ type: 'Contacts', id: userId }],
    }),

    getUserContacts: builder.query({
      query: (userId) => `/users/${userId}/contacts`,
      providesTags: (result, error, userId) => [{ type: 'Contacts', id: userId }],
    }),
  }),
  tagTypes: ['Contacts'],
});

export const { useGetUserContactsQuery, usePostContactsUserMutation } = userApiSlice;
