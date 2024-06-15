import { apiSlice } from '../api/apiSlice';

export const DefaultLanguageApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['DefLanguage'],
  endpoints: (builder) => ({
    getDefLanguageLevel: builder.query({
      query: (fileName) => `/data/languageproficiency/${fileName}`,
      providesTags: (result, error, id) => (result ? [{ type: 'DefLanguage', id }] : []),
    }),
    getDefLanguage: builder.query({
      query: (fileName) => `/data/languageproficiency/${fileName}`,
      providesTags: (result, error, id) => (result ? [{ type: 'DefLanguage', id }] : []),
    }),
  }),
});

export const { useGetDefLanguageLevelQuery, useGetDefLanguageQuery } = DefaultLanguageApiSlice;
