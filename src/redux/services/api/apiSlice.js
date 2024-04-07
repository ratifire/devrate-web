import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080',
  credentials: 'include',
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});
