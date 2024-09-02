import { apiSlice } from '../services/api/apiSlice';

export const CalendarApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Event'],
  endpoints: (builder) => ({
    getEventByUserId: builder.query({
      query: (userId) => `/users/${userId}/events`,
      providesTags: (result) => (result ? [...result.map(({ id }) => ({ type: 'Event', id })), 'Event'] : ['Event']),
    }),

    deleteEventById: builder.mutation({
      query(userId, id) {
        return {
          url: `/users/${userId}/interviews/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id) => [{ type: 'Event', id }],
    }),
  }),
});

export const { useGetEventByUserIdQuery, useDeleteEventByIdMutation } = CalendarApiSlice;
