import { apiSlice } from '../services/api/apiSlice';

const passedInterviewApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['PassedInterview'],
  endpoints: (builder) => ({
    getAllPassedInterviews: builder.query({
      query: ({ page, size }) => `/interview-histories?page=${page}&size=${size}`,
      providesTags: (result) =>
        result?.content
          ? [...result.content.map(({ id }) => ({ type: 'PassedInterview', id })), 'PassedInterview']
          : ['PassedInterview'],

      transformResponse: (result) => {
        const transformedContent = result?.content.map((event) => {
          return {
            ...event,
            title: event.attendeeSpecialization,
            date: event.dateTime,
            hostId: event.attendeeId,
            hostFirstName: event.attendeeFirstName,
            hostLastName: event.attendeeLastName,
          };
        });

        return {
          ...result,
          content: transformedContent,
        };
      },
    }),
    getPassedInterviewById: builder.query({
      query: ({ interviewId }) => `/interview-histories/${interviewId}`,
    }),
  }),
});

export const { useGetAllPassedInterviewsQuery, useGetPassedInterviewByIdQuery } = passedInterviewApiSlice;
