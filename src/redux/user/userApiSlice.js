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
      onSuccess: (data, variables, api) => {
        console.log('Status code:', api.getState().userApiSlice.requests.languageProficienciesUser.status);
        return data;
      },
    }),
    addPicturesUser: builder.mutation({
      query: ({ userId, body }) => {
        console.log(userId, body, '461546712456735126735671283212');
        return {
          url: `/users/${userId}/pictures`,
          method: 'POST',
          body,
        };
      },
    }),
    addContactsUser: builder.mutation({
      query: ({ userId, body }) => {
        console.log(userId, body, '461546712456735126735671283212');
        return {
          url: `/users/${userId}/contacts`,
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const {
  useUpdatePersonalUserMutation,
  useLanguageProficienciesUserMutation,
  useAddPicturesUserMutation,
  useAddContactsUserMutation,
} = userApiSlice;
