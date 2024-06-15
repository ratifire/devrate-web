import { apiSlice } from './api/apiSlice';

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
    deleteNotification: builder.mutation({
      query: ({notificationId, userId}) => ({
        url: `/notifications?${(new URLSearchParams({
          notificationId,
          userId
        }))}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useMarkAsReadMutation,
  useDeleteNotificationMutation,
} = notificationsApiSlice;
