import { TAG_TYPES } from '../../utils/constants/tagTypes';
import { apiSlice } from './api/apiSlice';

export const notificationsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: (userId) => `/users/${userId}/notifications`,
      providesTags: [TAG_TYPES.Notifications],
      transformResponse(response) {
        return response;
      },
      async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        // const ws = new WebSocket(`${import.meta.env.VITE_WS_URL}${urlWS.notification}`);
        const ws = new WebSocket('wss://server.skillzzy.com/ws/notifications');
        try {
          await cacheDataLoaded;
          const listener = ({ data }) => {
            const dataParse = JSON.parse(data);

            updateCachedData((draft) => {
              draft.push(dataParse);
            });
          };

          ws.addEventListener('message', listener);
        } catch {
          new Error('Sorry something went wrong ...');
        }

        await cacheEntryRemoved;
        ws.close();
      },
    }),
    markAsRead: builder.mutation({
      query: ({ notificationId, userId }) => ({
        url: `/notifications?${new URLSearchParams({
          notificationId,
          userId,
        })}`,
        method: 'PATCH',
      }),
      invalidatesTags: [TAG_TYPES.Notifications],
    }),
    deleteNotification: builder.mutation({
      query: ({ notificationId, userId }) => ({
        url: `/notifications?${new URLSearchParams({
          notificationId,
          userId,
        })}`,
        method: 'DELETE',
      }),
      invalidatesTags: [TAG_TYPES.Notifications],
    }),
  }),
});

export const { useMarkAsReadMutation, useDeleteNotificationMutation, useGetNotificationsQuery } = notificationsApiSlice;
