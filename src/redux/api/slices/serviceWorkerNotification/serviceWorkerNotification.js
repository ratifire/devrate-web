import { apiSlice } from '@redux/api/apiSlice';
import { TAG_TYPES } from '@utils/constants/tagTypes.js';

const serviceWorkerNotificationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    subscribeToPush: builder.mutation({
      query: (subscription) => ({
        method: 'POST',
        url: 'http://localhost:5001/subscribe',
        body: subscription,
      }),
      invalidatesTags: [TAG_TYPES.ServiceWorkerNotification],
    }),
  }),
});

export default serviceWorkerNotificationApiSlice;
