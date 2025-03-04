import { apiSlice } from '../services/api/apiSlice';
import { TAG_TYPES } from '../../utils/constants/tagTypes';

export const ScheduleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEventByUserId: builder.query({
      query: ({ from, to }) => `events?from=${from}&to=${to}`,
      providesTags: (result) =>
        result ? [...result.map(({ id }) => ({ type: TAG_TYPES.Event, id })), TAG_TYPES.Event] : [TAG_TYPES.Event],
    }),

    getClosestEventByUserId: builder.query({
      query: ({ fromTime }) => `interviews/events/closest?from=${fromTime}`,
      providesTags: (result) =>
        result ? [...result.map(({ id }) => ({ type: TAG_TYPES.Event, id })), TAG_TYPES.Event] : [TAG_TYPES.Event],
    }),

    deleteEventById: builder.mutation({
      query: ({ id }) => {
        return {
          url: `interviews/${id}`,
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
