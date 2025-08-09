import { apiSlice } from '@redux/api/apiSlice.js';

const profileSettingsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateEmailSubscription: builder.mutation({
      query: (enabled) => ({
        url: `/profile-settings/email-subscription?enabled=${enabled}`,
        method: 'PATCH',
      }),
    }),
    updateLanguage: builder.mutation({
      query: (language) => ({
        url: `/profile-settings/account-language?language=${language}`,
        method: 'PATCH',
      }),
    }),
    updateEmail: builder.mutation({
      query: ({ currentEmail, newEmail }) => ({
        url: '/profile-settings/change-email',
        method: 'PATCH',
        body: { currentEmail, newEmail },
        credentials: 'include',
      }),
    }),
    updatePassword: builder.mutation({
      query: ({ currentPassword, newPassword }) => ({
        url: '/profile-settings/change-password',
        method: 'PATCH',
        body: { currentPassword, newPassword },
      }),
    }),
  }),
});

export const {
  useUpdateEmailSubscriptionMutation,
  useUpdateEmailMutation,
  useUpdatePasswordMutation,
  useUpdateLanguageMutation,
} = profileSettingsApiSlice;
