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
    }),
    getPassedInterviewById: builder.query({
      query: ({ interviewId }) => `/interview-histories/${interviewId}`,
    }),
  }),
});

export const { useGetAllPassedInterviewsQuery, useGetPassedInterviewByIdQuery } = passedInterviewApiSlice;
