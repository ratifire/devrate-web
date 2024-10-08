import { apiSlice } from '../services/api/apiSlice';

export const SearchApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSearch: builder.query({
      query: (search) => `users/search?query=${search}`,
    })
  })
})

export const { useLazyGetSearchQuery } = SearchApiSlice;
