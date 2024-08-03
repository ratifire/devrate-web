import { apiSlice } from '../services/api/apiSlice';

export const chartApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['InterviewSummaryStatistic'],
  endpoints: (builder) => ({
    getInterviewSummariesStatistic: builder.query({
      query: ({ userId, from, to }) => {
        const params = new URLSearchParams({ from, to });
        return `/users/${userId}/interview-summaries/statistics?${params.toString()}`;
      },
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'InterviewSummary', id })), 'InterviewSummaryStatistic']
          : ['InterviewSummaryStatistic'],
    }),
  }),
});

export const { useGetInterviewSummariesStatisticQuery } = apiSlice;
