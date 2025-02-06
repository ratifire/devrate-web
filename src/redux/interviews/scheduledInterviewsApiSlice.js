import { apiSlice } from '../services/api/apiSlice';

const scheduledInterviewApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['ScheduledInterview'],
  endpoints: (builder) => ({
    getAllScheduledInterviews: builder.query({
      query: ({ page, size }) => `/interviews?page=${page}&size=${size}`,
      providesTags: (result) =>
        result?.content
          ? [...result.content.map(({ id }) => ({ type: 'ScheduledInterview', id })), 'ScheduledInterview']
          : ['ScheduledInterviews'],
      transformResponse: (result) => {
        const transformedContent = result?.content.map((event) => {
          return {
            ...event,
            title: event.specializationName,
            date: event.startTime,
          };
        });

        return {
          ...result,
          content: transformedContent,
        };
      },
    }),
    getScheduledInterviewById: builder.query({
      query: ({ interviewId }) => `/interviews/events/${interviewId}`,
    }),
  }),
});

export const { useGetAllScheduledInterviewsQuery, useGetScheduledInterviewByIdQuery } = scheduledInterviewApiSlice;
