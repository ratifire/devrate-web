import { apiSlice } from '../services/api/apiSlice';

export const SearchApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSearch: builder.query({
      query: (search) => `/search?search=${search}`,
    })
  })
})

export const { useGetSearchQuery } = SearchApiSlice;
