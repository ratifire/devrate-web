import { apiSlice } from '../../services/api/apiSlice';

export const languageApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['LanguageUser'],
  endpoints: (builder) => ({
    getLanguageUser: builder.query({
      query: (userId) => `/users/${userId}/language-proficiencies`,
      providesTags: (result, error, id) => (result ? [{ type: 'LanguageUser', id }] : []),
    }),

    postLanguageUser: builder.mutation({
      query: ({ userId, body }) => ({
        url: `/users/${userId}/language-proficiencies`,
        method: 'POST',
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'LanguageUser', id }],
    }),
  }),
});

export const { useGetLanguageUserQuery, usePostLanguageUserMutation } = languageApiSlice;
