import { apiSlice } from '../services/api/apiSlice';

const passedInterviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPassedInterviews: builder.query({
      query: ({ page, size }) => `/interview-histories?page=${page}&size=${size}`,
    }),
    getPassedInterviewById: builder.query({
      query: ({ interviewId }) => `/interview-histories/${interviewId}`,
    }),
  }),
});

export const { useGetAllPassedInterviewsQuery, useGetPassedInterviewByIdQuery } = passedInterviewApiSlice;
