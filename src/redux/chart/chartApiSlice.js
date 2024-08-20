import { apiSlice } from '../services/api/apiSlice'

export const chartApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['InterviewSummaryStatistic', 'MasteriesHistoryStatistic'],
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
    getMasteriesHistoryStatistic: builder.query({
      query: ({ selectMasteryId, from, to }) => {
        const params = new URLSearchParams({ from, to });
        return `/masteries/${selectMasteryId}/history?${params.toString()}`;
      },
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'MasteriesHistory', id })), 'MasteriesHistoryStatistic']
          : ['MasteriesHistoryStatistic'],
    })
  }),
});

export const { useGetInterviewSummariesStatisticQuery, useGetMasteriesHistoryStatisticQuery } = apiSlice;
