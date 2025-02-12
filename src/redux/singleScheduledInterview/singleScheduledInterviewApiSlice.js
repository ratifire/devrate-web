import { apiSlice } from '../services/api/apiSlice.js';

const singleScheduledInterviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSkillsForMasteryId: builder.query({
      query: ({ masteryId }) => `/masteries/${masteryId}/skills/all`,
    }),
  }),
});

export const { useGetAllSkillsForMasteryIdQuery } = singleScheduledInterviewApiSlice;
