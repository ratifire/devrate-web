import { apiSlice } from '@redux/api/apiSlice.js';

const profileSettingsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateEmailSubscription: builder.mutation({
      query: (enabled) => ({
        url: `/profile-settings/email-subscription?enabled=${enabled}`,
        method: 'PATCH',
      }),
    }),
  }),
});

export const { useUpdateEmailSubscriptionMutation } = profileSettingsApiSlice;
