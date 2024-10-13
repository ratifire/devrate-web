/* eslint-disable */

import { apiSlice } from '../services/api/apiSlice';

const interviewApiSlice = apiSlice.injectEndpoints({
  tagTypes: [''],
  endpoints: (builder) => ({
    getInterviewById: builder.query({
      query: ({id}) => `/feedback-details/${id}`,
    })
  })
});

export const { useGetInterviewByIdQuery } = interviewApiSlice;
