import { apiSlice } from '../../services/api/apiSlice';
import { TAG_TYPES } from '../../../utils/constants/tagTypes';

export const languageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLanguageUser: builder.query({
      query: (userId) => `/users/${userId}/language-proficiencies`,
      providesTags: (result, error, id) => (result ? [{ type: TAG_TYPES.LanguageUser, id }] : []),
    }),

    postLanguageUser: builder.mutation({
      query: ({ userId, body }) => ({
        url: `/users/${userId}/language-proficiencies`,
        method: 'POST',
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: TAG_TYPES.LanguageUser, id }],
    }),
  }),
});

export const { useGetLanguageUserQuery, usePostLanguageUserMutation } = languageApiSlice;
