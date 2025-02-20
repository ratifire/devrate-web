import { TAG_TYPES } from '../../utils/constants/tagTypes.js';
import { apiSlice } from './api/apiSlice';

export const interviewRequestApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInterviewRequestByMasteryId: builder.query({
      query: (masteryId) => `/interview-requests/masteries/${masteryId}`,
      providesTags: [TAG_TYPES.InterviewRequest],
    }),

    createInterviewRequest: builder.mutation({
      query: ({ role, availableDates, comment, desiredInterviewDate, desiredNumberOfInterviews }) => ({
        url: `/interview-requests`,
        method: 'POST',
        body: {
          role,
          availableDates,
          comment,
          desiredInterviewDate,
          desiredNumberOfInterviews,
        },
      }),
      invalidatesTags: [TAG_TYPES.InterviewRequest],
    }),

    updateTimeSlots: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/interview-requests/${id}`,
          method: 'PUT',
          body: { ...data },
        };
      },
      invalidatesTags: [TAG_TYPES.InterviewRequest],
    }),

    deleteInterviewRequest: builder.mutation({
      query: (id) => ({
        url: `/interview-requests/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [TAG_TYPES.InterviewRequest],
    }),
  }),
});

export const {
  useGetInterviewRequestByMasteryIdQuery,
  useCreateInterviewRequestMutation,
  useUpdateTimeSlotsMutation,
  useDeleteInterviewRequestMutation,
} = interviewRequestApiSlice;
