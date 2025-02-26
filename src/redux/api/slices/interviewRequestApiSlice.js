import { TAG_TYPES } from '@utils/constants/tagTypes.js';
import { apiSlice } from '@redux/api/apiSlice';

export const interviewRequestApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInterviewRequestByMasteryId: builder.query({
      query: ({ masteryId }) => ({
        url: `interview-requests/masteries/${masteryId}`,
      }),
      providesTags: [TAG_TYPES.InterviewRequest],
    }),
  }),
});

export const { useGetInterviewRequestByMasteryIdQuery } = interviewRequestApiSlice;
