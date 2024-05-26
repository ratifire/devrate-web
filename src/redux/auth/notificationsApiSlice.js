import { apiSlice } from '../services/api/apiSlice';

export const notificationsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    markAsRead: builder.mutation({
      query: ({notificationId, userId}) => ({
        url: `/notifications?${(new URLSearchParams({
          notificationId,
          userId
        }))}`,
        method: 'PATCH',
      }),
    }),
  }),
});

export const {
  useMarkAsReadMutation,
} = notificationsApiSlice;
