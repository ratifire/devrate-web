import { apiSlice } from '../services/api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updatePersonalUser: builder.mutation({
      query: (data) => {
        console.log(data, 'users');
        return {
          url: `/users`,
          method: 'PUT',
          data,
        };
      },
    }),
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

export const { useUpdatePersonalUserMutation, useLanguageProficienciesUserMutation, useAddContactsUserMutation } =
  userApiSlice;
