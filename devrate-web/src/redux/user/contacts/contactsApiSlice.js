import { apiSlice } from '../../services/api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['ContactList'],
  endpoints: (builder) => ({
    postContactsUser: builder.mutation({
      query: ({ userId, body }) => ({
        url: `/users/${userId}/contacts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['ContactList'],
    }),

    getUserContacts: builder.query({
      query: (userId) => `/users/${userId}/contacts`,
      transformResponse: (response) => {
        return response.filter(item => item.value?.length);
      },
      providesTags: () => ['ContactList'],
    }),
  }),
});

export const { useGetUserContactsQuery, usePostContactsUserMutation } = userApiSlice;
