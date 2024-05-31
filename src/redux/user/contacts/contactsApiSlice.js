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
    getContactsUser: builder.query({
      query: (userId) => `/users/${userId}/achievements`,
    }),
  }),
});

export const { usePostContactsUserMutation } = userApiSlice;
