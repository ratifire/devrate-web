import { apiSlice } from '@redux/api/apiSlice.js';

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
    }),
  }),
});

export const { useGetInterviewByIdQuery, useCreateInterviewMutation } = interviewApiSlice;
