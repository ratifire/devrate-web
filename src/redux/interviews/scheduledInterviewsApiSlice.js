import { apiSlice } from '../services/api/apiSlice';

const scheduledInterviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllScheduledInterviews: builder.query({
      query: ({ page, size }) => `/interviews?page=${page}&size=${size}`,
    }),
    getScheduledInterviewById: builder.query({
      query: ({ interviewId }) => `/interviews/events/${interviewId}`,
    }),
  }),
});

export const { useGetAllScheduledInterviewsQuery, useGetScheduledInterviewByIdQuery } = scheduledInterviewApiSlice;
