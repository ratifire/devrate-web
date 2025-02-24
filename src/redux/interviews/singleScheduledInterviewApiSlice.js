import { apiSlice } from '../services/api/apiSlice.js';

const singleScheduledInterviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSkillsForMasteryId: builder.query({
      query: ({ masteryId }) => `/masteries/${masteryId}/skills/all`,
    }),
    getMasteries: builder.query({
      query: (masteryId) => `/masteries/${masteryId}`,
    }),
    deleteInterview: builder.mutation({
      query: ({ eventId }) => ({
        url: `/interviews/${eventId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetAllSkillsForMasteryIdQuery, useGetMasteriesQuery, useDeleteInterviewMutation } =
  singleScheduledInterviewApiSlice;
