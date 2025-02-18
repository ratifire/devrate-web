import { apiSlice } from '@redux/api/apiSlice.js';

const interviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInterviewById: builder.query({
      query: ({ id }) => `/feedback-details/${id}`,
    }),
    createInterview: builder.mutation({
      query: ({ reviewerId, body }) => ({
        method: 'POST',
        url: `/users/${reviewerId}/feedbacks`,
        body: { ...body },
      }),
    }),
  }),
});

export const { useGetInterviewByIdQuery, useCreateInterviewMutation } = interviewApiSlice;
