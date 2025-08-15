import { apiSlice } from '@redux/api/apiSlice.js';

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
      async onQueryStarted({ eventId }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData('getAllScheduledInterviews', { size: 6 }, (draft) => {
            draft.content = draft.content.filter((item) => item.id !== eventId);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    deleteNotConductedInterview: builder.mutation({
      query: ({ eventId }) => ({
        url: `/interviews/${eventId}/not-conducted`,
        method: 'DELETE',
      }),
      async onQueryStarted({ eventId }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData('getAllScheduledInterviews', { size: 6 }, (draft) => {
            draft.content = draft.content.filter((item) => item.id !== eventId);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetAllSkillsForMasteryIdQuery,
  useGetMasteriesQuery,
  useDeleteInterviewMutation,
  useDeleteNotConductedInterviewMutation,
} = singleScheduledInterviewApiSlice;
