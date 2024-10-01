import { apiSlice } from '../services/api/apiSlice';

export const ScheduleApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Event'],
  endpoints: (builder) => ({
    getEventByUserId: builder.query({
      query: ({ userId, from, to }) => `users/${userId}/events?from=${from}&to=${to}`,
      providesTags: (result) => (result ? [...result.map(({ id }) => ({ type: 'Event', id })), 'Event'] : ['Event']),
    }),

    getClosestEventByUserId: builder.query({
      query: ({ userId, fromTime }) => `/users/${userId}/events/closest?from=${fromTime}`,
      providesTags: (result) => (result ? [...result.map(({ id }) => ({ type: 'Event', id })), 'Event'] : ['Event']),
    }),

    deleteEventById: builder.mutation({
      query: ({ userId, id }) => {
        return {
          url: `/users/${userId}/interviews/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Event', id }],
    }),
  }),
});

export const {
  useGetEventByUserIdQuery,
  useLazyGetEventByUserIdQuery,
  useGetClosestEventByUserIdQuery,
  useDeleteEventByIdMutation,
} = ScheduleApiSlice;
