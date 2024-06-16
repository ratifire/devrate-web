import { apiSlice } from './api/apiSlice';

export const languagesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchLanguages: builder.query({
      query: (userId) => `/users/${userId}/language-proficiencies`,
    }),
  }),
});

export const { useFetchLanguagesQuery } = languagesApiSlice;
