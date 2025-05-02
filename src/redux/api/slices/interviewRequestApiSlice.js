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
      query: ({
        id,
        data: { role, desiredInterview, comment, availableDates, assignedDates, masteryId, languageCode },
      }) => {
        return {
          url: `/interview-requests/${id}`,
          method: 'PUT',
          body: {
            role: role,
            desiredInterview: desiredInterview,
            comment: comment,
            availableDates: availableDates,
            assignedDates: assignedDates,
            masteryId: masteryId,
            languageCode: languageCode,
          },
        };
      },
      invalidatesTags: [TAG_TYPES.InterviewRequest],
    }),

    deleteTimeSlots: builder.mutation({
      query: ({ id, timeSlots }) => ({
        url: `/interview-requests/${id}/delete-timeslots`,
        method: 'DELETE',
        body: timeSlots,
      }),
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
  useDeleteTimeSlotsMutation,
  useDeleteInterviewRequestMutation,
} = interviewRequestApiSlice;
