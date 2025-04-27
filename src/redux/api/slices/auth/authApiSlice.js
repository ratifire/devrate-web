import { apiSlice } from '@redux/api/apiSlice';
import { getTokenInHeaders } from '@utils/helpers';
import { TAG_TYPES_ARRAY } from '@utils/constants/tagTypes';
import { setDarkTheme } from '@redux/slices/theme/themeSlice';
import { logOut } from '@redux/slices/auth/authSlice';
import { clearTokens } from '@redux/slices/auth/tokenSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    oAuthLinkedIn: builder.query({
      query: () => ({
        url: '/auth/oauth/redirect/linkedIn',
      }),
    }),
    oAuthGoogle: builder.query({
      query: () => ({
        url: '/auth/oauth/redirect/google',
      }),
    }),
    oAuthAuthorize: builder.mutation({
      query: ({ code, state }) => ({
        url: '/auth/oauth/authorize',
        method: 'POST',
        body: {
          authorizationCode: code,
          state,
        },
      }),
    }),
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
    registrationResendCode: builder.mutation({
      query: ({ email }) => ({
        url: `/auth/signup/resend-code`,
        method: 'POST',
        body: { email },
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
      invalidatesTags: TAG_TYPES_ARRAY,
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
  useLazyOAuthLinkedInQuery,
  useLazyOAuthGoogleQuery,
  useOAuthAuthorizeMutation,
  useCreateUserMutation,
  useConfirmEmailMutation,
  useRegistrationResendCodeMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useLoginMutation,
  useLogoutMutation,
} = authApiSlice;
