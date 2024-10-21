import { apiSlice } from './api/apiSlice';
import { urlWS } from './api/socketsEndpoints';

export const notificationsApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['notifications'],
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: (userId) => `/users/${userId}/notifications`,
      providesTags: ['notifications'],
      transformResponse (response) {
        return response;
      },
      async onCacheEntryAdded (
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved },
      ) {
        const ws = new WebSocket(`${process.env.REACT_APP_WS_URL}${urlWS.notification}`);
        try {
          await cacheDataLoaded;
          const listener = ({data}) => {
            
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
        url: `/notifications?${(new URLSearchParams({
          notificationId,
          userId,
        }))}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['notifications'],
    }),
    deleteNotification: builder.mutation({
      query: ({ notificationId, userId }) => ({
        url: `/notifications?${(new URLSearchParams({
          notificationId,
          userId,
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
