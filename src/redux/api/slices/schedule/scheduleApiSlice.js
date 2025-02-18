import { apiSlice } from '@redux/api/apiSlice.js';
import { TAG_TYPES } from '@utils/constants/tagTypes.js';

export const ScheduleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEventByUserId: builder.query({
      query: ({ userId, from, to }) => `users/${userId}/events?from=${from}&to=${to}`,
      providesTags: (result) =>
        result ? [...result.map(({ id }) => ({ type: TAG_TYPES.Event, id })), TAG_TYPES.Event] : [TAG_TYPES.Event],
    }),

    getClosestEventByUserId: builder.query({
      query: ({ userId, fromTime }) => `/users/${userId}/events/closest?from=${fromTime}`,
      providesTags: (result) =>
        result ? [...result.map(({ id }) => ({ type: TAG_TYPES.Event, id })), TAG_TYPES.Event] : [TAG_TYPES.Event],
    }),

    deleteEventById: builder.mutation({
      query: ({ userId, id }) => {
        return {
          url: `/users/${userId}/interviews/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: TAG_TYPES.Event, id }],
    }),
  }),
});

export const {
  useGetEventByUserIdQuery,
  useLazyGetEventByUserIdQuery,
  useGetClosestEventByUserIdQuery,
  useDeleteEventByIdMutation,
} = ScheduleApiSlice;
