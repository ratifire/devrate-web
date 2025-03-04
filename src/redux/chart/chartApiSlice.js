import { apiSlice } from '../services/api/apiSlice';

const chartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInterviewSummariesStatistic: builder.query({
      query: ({ from, to }) => {
        const params = new URLSearchParams({ from, to });
        return `/interview-histories/statistics?${params.toString()}`;
      },
    }),
    getMasteriesHistoryStatistic: builder.query({
      query: ({ selectMasteryId, from, to }) => {
        const params = new URLSearchParams({ from, to });
        return `/masteries/${selectMasteryId}/history?${params.toString()}`;
      },
    }),
  }),
});

export const { useGetInterviewSummariesStatisticQuery, useGetMasteriesHistoryStatisticQuery } = chartApiSlice;
