import { apiSlice } from '../services/api/apiSlice';
import { TAG_TYPES } from '../../utils/constants/tagTypes';

export const ScheduleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEventByUserId: builder.query({
      query: ({ from, to }) => `events?from=${from}&to=${to}`,
      providesTags: [TAG_TYPES.Event],
    }),

    getClosestEventByUserId: builder.query({
      query: ({ fromTime }) => `interviews/events/closest?from=${fromTime}`,
      providesTags: [TAG_TYPES.Event],
    }),

    getEventById: builder.query({
      query: ({ id }) => `interviews/events/${id}`,
      providesTags: [TAG_TYPES.Event],
    }),

    deleteEventById: builder.mutation({
      query: ({ id }) => {
        return {
          url: `interviews/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: [TAG_TYPES.Event],
    }),
  }),
});

export const {
  useGetEventByUserIdQuery,
  useLazyGetEventByUserIdQuery,
  useGetClosestEventByUserIdQuery,
  useDeleteEventByIdMutation,
  useGetEventByIdQuery,
} = ScheduleApiSlice;
