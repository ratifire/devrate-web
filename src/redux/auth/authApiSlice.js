import { apiSlice } from '../services/api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) => ({
        url: '/auth/signup',
        method: 'POST',
        body,
      }),
    }),
    confirmEmail: builder.mutation({
      query: (data) => ({
        url: `/auth/signup/${data}`,
        method: 'PUT',
        data,
      }),
      onSuccess: (data, variables, api) => {
        console.log('Status code:', api.getState().authApiSlice.requests.confirmEmail.status);
        return data;
      },
    }),
    resetPassword: builder.mutation({
      query: ({ email }) => ({
        url: `/auth/password-reset?email=${encodeURIComponent(email)}`,
        method: 'POST',
      }),
      onSuccess: (data, variables, api) => {
        console.log('Status code:', api.getState().authApiSlice.requests.resetPassword.status);
        return data;
      },
    }),
    changePassword: builder.mutation({
      query: ({ code }) => ({
        url: `/auth/password-reset/${code}`,
        method: 'POST',
        body: { code },
      }),
      onSuccess: (data, variables, api) => {
        console.log('Status code:', api.getState().authApiSlice.requests.changePassword.status);
        return data;
      },
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/signin',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useCreateUserMutation, useConfirmEmailMutation, useResetPasswordMutation, useChangePasswordMutation, useLoginMutation } = authApiSlice;
