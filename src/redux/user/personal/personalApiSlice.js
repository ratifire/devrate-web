import { apiSlice } from '../../services/api/apiSlice';

export const personalApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['PersonalUser'],
  endpoints: (builder) => ({
    getPersonalUser: builder.query({
      query: (userId) => `/users/${userId}`,
      providesTags: (result, error, id) => (result ? [{ type: 'PersonalUser', id }] : []),
    }),

    putPersonalUser: builder.mutation({
      query: (body) => ({
        url: `/users`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'PersonalUser', id }],
    }),
    deletePersonalUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'PersonalUser', id }],
    }),
  }),
});

export const { useGetPersonalUserQuery, usePutPersonalUserMutation, deletePersonalUserMutation } = personalApiSlice;
