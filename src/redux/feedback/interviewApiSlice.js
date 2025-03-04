import { apiSlice } from '../services/api/apiSlice';
import { TAG_TYPES } from '../../utils/constants/tagTypes.js';

const interviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInterviewById: builder.query({
      query: ({ id }) => `/interview-feedbacks/${id}`,
    }),
    createInterview: builder.mutation({
      query: ({ body }) => ({
        method: 'POST',
        url: '/interview-feedbacks',
        body: { ...body },
      }),
      invalidatesTags: [TAG_TYPES.ScheduledInterview],
    }),
  }),
});

export const { useGetInterviewByIdQuery, useCreateInterviewMutation } = interviewApiSlice;
