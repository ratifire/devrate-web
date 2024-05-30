import { apiSlice } from '../services/api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    languageProficienciesUser: builder.mutation({
      query: ({ userId, body }) => ({
        url: `/user/${userId}/language-proficiencies`,
        method: 'POST',
        body,
      }),
    }),
    addContactsUser: builder.mutation({
      query: ({ userId, body }) => ({
        url: `/users/${userId}/contacts`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLanguageProficienciesUserMutation, useAddContactsUserMutation } =
  userApiSlice;
