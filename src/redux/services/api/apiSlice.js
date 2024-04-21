import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  // eslint-disable-next-line
  baseUrl: process.env.REACT_APP_API_URL,
  credentials: 'include',
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});
