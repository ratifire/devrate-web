import { apiSlice } from './api/apiSlice';

export const notificationsApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['notifications'],
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: (userId) => `/users/${userId}/notifications`,
      providesTags:  ['notifications'],
      transformResponse(response) {
        return response;
      },
      async onCacheEntryAdded (
        arg,
          { updateCachedData,cacheDataLoaded,  cacheEntryRemoved },
      ) {
        const ws = new WebSocket(`${process.env.REACT_APP_WS_URL}/ws/notifications`);
        try {
          await cacheDataLoaded;
          const listener = (event) => {
            const data = JSON.parse(event.data);
            
            updateCachedData((draft) => {
              console.log(data,'api Dev1234!! data');
              draft.push(data);
            });
          };

          ws.addEventListener('message', listener);
        } catch {
          console.log('Error while fetching notification data.');
        }

        await cacheEntryRemoved;
        ws.close();
      },
    }),
    markAsRead: builder.mutation({
      query: ({notificationId, userId}) => ({
        url: `/notifications?${(new URLSearchParams({
          notificationId,
          userId
        }))}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['notifications'],
    }),
    deleteNotification: builder.mutation({
      query: ({notificationId, userId}) => ({
        url: `/notifications?${(new URLSearchParams({
          notificationId,
          userId
        }))}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['notifications'],
    }),
  }),
});

export const {
  useMarkAsReadMutation,
  useDeleteNotificationMutation,
  useGetNotificationsQuery,
} = notificationsApiSlice;
