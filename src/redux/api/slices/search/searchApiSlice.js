import { apiSlice } from '@redux/api/apiSlice.js';

export const SearchApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSearch: builder.query({
      query: (search) => `users/search?query=${search}`,
    }),
  }),
});

export const { useGetSearchQuery } = SearchApiSlice;
