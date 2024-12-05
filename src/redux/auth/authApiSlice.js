import { apiSlice } from '../services/api/apiSlice';
import { setDarkTheme } from '../theme/themeSlice';
import { logOut } from './authSlice';

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
      query: ({ confirmationCode, email }) => ({
        url: `/auth/signup/confirm`,
        method: 'PUT',
        body: { confirmationCode, email },
      }),
      transformResponse: (response) => {
        // Ensure the response is correctly transformed
        return response; // Adjust according to your API response structure
      },
      transformErrorResponse: (response) => {
        // Ensure the error response is correctly transformed
        return response.data; // Adjust according to your API error response structure
      },
      onSuccess: (data) => {
        return data;
      },
    }),
    resetPassword: builder.mutation({
      query: ({ email }) => ({
        url: `/auth/request-password-reset?email=${encodeURIComponent(email)}`,
        method: 'POST',
      }),
      onSuccess: (data) => {
        return data;
      },
    }),
    changePassword: builder.mutation({
      query: ({ code, newPassword }) => ({
        url: '/auth/password-reset',
        method: 'POST',
        body: { code, newPassword },
      }),
      onSuccess: (data) => {
        return data;
      },
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/auth/signin',
        method: 'POST',
        body: { email, password },
      }),
      transformResponse: (response, meta) => {
        const headers = meta?.response?.headers;
        if (headers) {
          const authToken = headers.get('authorization');
          const idToken = headers.get('id-token');

          if (authToken && idToken) {
            return { authToken, idToken, ...response };
          }
        }
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
        credentials: 'include',
        headers: (headers, { getState }) => {
          const { authToken, idToken } = getState().auth.user;

          if (authToken && idToken) {
            headers.set('Authorization', authToken);
            headers.set('Id-Token', idToken);
          }

          return headers;
        },
        responseHandler: (response) => response.text(),
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logOut());
          dispatch(setDarkTheme());
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log('Logout failed:', error);
        }
      },
    }),
  }),
});

export const {
  useCreateUserMutation,
  useConfirmEmailMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshTokenMutationLazy,
} = authApiSlice;
