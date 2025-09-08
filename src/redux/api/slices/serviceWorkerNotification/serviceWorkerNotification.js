import { apiSlice } from '@redux/api/apiSlice';

const serviceWorkerNotificationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    subscribeToPush: builder.mutation({
      query: (subscription) => ({
        method: 'POST',
        url: '/web-subscription/subscribe',
        body: subscription,
      }),
    }),
    unsubscribeFromPush: builder.mutation({
      query: (subscription) => ({
        url: '/web-subscription/unsubscribe',
        method: 'POST',
        body: subscription,
      }),
    }),
  }),
});

export default serviceWorkerNotificationApiSlice;
