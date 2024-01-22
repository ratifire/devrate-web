import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// to be replaced by devrateAPI

export const API_BASE_URL = 'https://lms-back-ccq8.onrender.com/api/';
export const lmsBackApi = createApi({
  reducerPath: 'lmsBackApi',
  tagTypes: ['Auth'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) => ({
        url: 'auth/signup',
        method: 'POST',
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: 'auth/signin',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation } = lmsBackApi;
