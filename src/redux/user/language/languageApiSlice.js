import { apiSlice } from '../../services/api/apiSlice';

export const languageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postLanguageUser: builder.mutation({
      query: ({ userId, body }) => ({
        url: `/user/${userId}/language-proficiencies`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { usePostLanguageUser } = languageApiSlice;
