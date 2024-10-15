/* eslint-disable */

import { apiSlice } from '../services/api/apiSlice';

const interviewApiSlice = apiSlice.injectEndpoints({
  tagTypes: [''],
  endpoints: (builder) => ({
    getInterviewById: builder.query({
      query: ({id}) => `/feedback-details/${id}`,
    }),
    createInterview: builder.mutation({
      query: ({reviewerId, body}) => ({
        method: 'POST',
        url: `/users/${reviewerId}/feedbacks`,
        body: { ...body }
      })
    })
  })
});

export const { useGetInterviewByIdQuery, useCreateInterviewMutation } = interviewApiSlice;
