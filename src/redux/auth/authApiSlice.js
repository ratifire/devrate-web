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
      query: (data) => {
        console.log('data in confirmEmail', data);
        return {
          url: `/auth/signup/${data}`,
          method: 'PUT',
          data,
        };
      },
      onSuccess: (data, variables, api) => {
        console.log('Status code:', api.getState().authApiSlice.requests.confirmEmail.status);
        // Повертаємо дані, які будуть доступні через useConfirmEmailMutation
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

export const { useCreateUserMutation, useConfirmEmailMutation, useLoginMutation } = authApiSlice;
