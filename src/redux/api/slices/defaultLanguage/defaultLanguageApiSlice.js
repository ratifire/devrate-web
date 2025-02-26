import { TAG_TYPES } from '@utils/constants/tagTypes.js';
import { apiSlice } from '@redux/api/apiSlice.js';

export const DefaultLanguageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDefLanguageLevel: builder.query({
      query: (fileName) => `/data/languageproficiency/${fileName}`,
      providesTags: (result, error, id) => (result ? [{ type: TAG_TYPES.DefLanguage, id }] : []),
    }),
    getDefLanguage: builder.query({
      query: (fileName) => `/data/languageproficiency/${fileName}`,
      providesTags: (result, error, id) => (result ? [{ type: TAG_TYPES.DefLanguage, id }] : []),
    }),
  }),
});

export const { useGetDefLanguageLevelQuery, useGetDefLanguageQuery } = DefaultLanguageApiSlice;
