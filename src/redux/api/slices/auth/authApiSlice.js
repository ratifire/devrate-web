import { logOut } from '@redux/slices/auth/authSlice.js';
import { clearTokens } from '@redux/slices/auth/tokenSlice.js';
import { setDarkTheme } from '@redux/slices/theme/themeSlice.js';
import { getTokenInHeaders } from '@utils/helpers/index.js';
import { apiSlice } from '../../apiSlice.js';

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
    }),
    resetPassword: builder.mutation({
      query: ({ email }) => ({
        url: `/auth/request-password-reset?email=${encodeURIComponent(email)}`,
        method: 'POST',
      }),
    }),
    changePassword: builder.mutation({
      query: ({ code, newPassword, email }) => ({
        url: '/auth/password-reset',
        method: 'POST',
        body: { code, newPassword, email },
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/auth/signin',
        method: 'POST',
        body: { email, password },
        credentials: 'include',
      }),
      transformResponse: (response, meta) => {
        const headers = meta?.response?.headers;
        if (headers) {
          const { authToken, idToken } = getTokenInHeaders({ headers });

          if (authToken && idToken) {
            return { authToken, idToken, userData: { ...response } };
          }
        }
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
        credentials: 'include',
        responseHandler: (response) => response.text(),
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(logOut());
        dispatch(clearTokens());
        dispatch(setDarkTheme());
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
} = authApiSlice;
