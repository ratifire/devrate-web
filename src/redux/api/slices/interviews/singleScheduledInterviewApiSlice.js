import { apiSlice } from '@redux/api/apiSlice.js';
import { TAG_TYPES } from '@utils/constants/tagTypes.js';

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
      invalidatesTags: [TAG_TYPES.ScheduledInterview],
    }),
  }),
});

export const { useGetAllSkillsForMasteryIdQuery, useGetMasteriesQuery, useDeleteInterviewMutation } =
  singleScheduledInterviewApiSlice;
