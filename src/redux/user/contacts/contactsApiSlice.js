import { apiSlice } from '../../services/api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postContactsUser: builder.mutation({
      query: ({ userId, body }) => ({
        url: `/users/${userId}/contacts`,
        method: 'POST',
        body,
      }),
    }),
    getUserContacts: builder.query({
      query: (userId) => `/users/${userId}/contacts`,
    }),
  }),
});

export const { usePostContactsUserMutation, useGetUserContactsQuery } = userApiSlice;
