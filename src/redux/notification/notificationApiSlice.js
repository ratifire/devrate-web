// // import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { apiSlice } from '../services/api/apiSlice';
// import { logger } from 'redux-logger/src';
// export const notificationApi = apiSlice.injectEndpoints({
//   // baseQuery: fetchBaseQuery({ baseUrl: '/' }),
//   endpoints: (build) => ({
//     getNotifications: build.query({
//       query: () => `/ws/notifications`,
//       async onCacheEntryAdded(
//         arg,
//         { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
//       ) {
//         const ws = new WebSocket(`${process.env.REACT_APP_WS_URL}/ws/notifications`);
//
//         try {
//           await cacheDataLoaded;
//
//           const listener = (event) => {
//             const data = JSON.parse(event.data);
//             console.log('Received notification:', data); // Лог для перевірки даних
//             if (data.channel !== arg) return;
//
//             // Оновлення кешу з новими повідомленнями
//             updateCachedData((draft) => {
//               draft.push(data);
//             });
//           };
//
//           ws.addEventListener('message', listener);
//         } catch {
//         logger.error('Error while fetching notification data.');
//         }
//
//         await cacheEntryRemoved;
//         ws.close();
//       },
//     }),
//   }),
// });
//
// export const { useGetNotificationsQuery } = notificationApi;
// import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logger } from 'redux-logger/src';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const notificationApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/ws/notifications' }),
  reducerPath: 'notification',
  endpoints: (build) => ({
    getNotifications: build.query({
      query: () => `/`,
      async onCacheEntryAdded (
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved },
      ) {
        const ws = new WebSocket(`${process.env.REACT_APP_WS_URL}/ws/notifications`);
        try {
          await cacheDataLoaded;
          const listener = (event) => {
            const data = JSON.parse(event.data);
            
            updateCachedData((draft) => {
              draft.push(data);
            });
          };
          
          ws.addEventListener('message', listener);
        } catch {
          logger.error('Error while fetching notification data.');
        }
        
        await cacheEntryRemoved;
        ws.close();
      },
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationApi;
