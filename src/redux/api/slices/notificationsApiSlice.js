import { TAG_TYPES } from '@utils/constants/tagTypes';
import { apiSlice } from '@redux/api/apiSlice';
import { urlWS } from '@redux/websocket/socketsEndpoints.js';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

export const notificationsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: (userId) => `/users/${userId}/notifications`,
      providesTags: [TAG_TYPES.Notifications],
      transformResponse: (response) => {
        if (!Array.isArray(response)) return [];
        return response;
      },
      async onCacheEntryAdded(userId, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        let stompClient = null;
        let subscription = null;
        let isActive = true;

        const safeUpdateCachedData = (updateFn) => {
          if (isActive) {
            updateCachedData(updateFn);
          }
        };

        try {
          await cacheDataLoaded;

          const socket = new SockJS(`${import.meta.env.VITE_API_DEV_URL}${urlWS.notification}`);

          stompClient = new Client({
            webSocketFactory: () => socket,
            reconnectDelay: 5000,
            heartbeatIncoming: 10000,
            heartbeatOutgoing: 10000,
            onConnect: () => {
              subscription = stompClient.subscribe(`/topic/notifications/${userId}`, (message) => {
                setTimeout(() => {
                  if (!isActive) return;

                  try {
                    const notification = JSON.parse(message.body);
                    if (notification && typeof notification === 'object') {
                      safeUpdateCachedData((draft) => {
                        const newDraft = Array.isArray(draft) ? [...draft] : [];
                        newDraft.unshift(notification);
                        return newDraft;
                      });
                    }
                  } catch (error) {
                    console.error('Error handling notification:', error);
                  }
                }, 0);
              });
            },
            onStompError: (frame) => {
              console.error('STOMP error:', frame.headers.message);
            },
          });

          stompClient.activate();
        } catch (error) {
          console.error('WebSocket connection error:', error);
        }

        await cacheEntryRemoved;
        isActive = false;

        try {
          if (subscription) subscription.unsubscribe();
          if (stompClient) stompClient.deactivate();
        } catch (error) {
          console.error('Cleanup error:', error);
        }
      },
    }),
    markAsRead: builder.mutation({
      query: ({ notificationId, userId }) => ({
        url: `/notifications?${new URLSearchParams({ notificationId, userId })}`,
        method: 'PATCH',
      }),
      invalidatesTags: [TAG_TYPES.Notifications],
    }),
    deleteNotification: builder.mutation({
      query: ({ notificationId, userId }) => ({
        url: `/notifications?${new URLSearchParams({ notificationId, userId })}`,
        method: 'DELETE',
      }),
      invalidatesTags: [TAG_TYPES.Notifications],
    }),
  }),
});

export const { useGetNotificationsQuery, useMarkAsReadMutation, useDeleteNotificationMutation } = notificationsApiSlice;
