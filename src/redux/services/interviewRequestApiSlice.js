import { apiSlice } from './api/apiSlice';

export const interviewRequestApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Получить запросы на интервью по masteryId
    getInterviewRequestByMasteryId: builder.query({
      query: (masteryId) => `/interview-requests/masteries/${masteryId}`,
    }),

    // Создать новый запрос на интервью
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
      // invalidatesTags: [TAG_TYPES.InterviewRequest],
    }),

    // Обновить запрос на интервью
    updateInterviewRequest: builder.mutation({
      query: ({ id, role, availableDates, comment, desiredInterviewDate, desiredNumberOfInterviews }) => ({
        url: `/interview-requests/${id}`,
        method: 'PUT',
        body: {
          role,
          availableDates,
          comment,
          desiredInterviewDate,
          desiredNumberOfInterviews,
        },
      }),
      // invalidatesTags: [TAG_TYPES.InterviewRequest],
    }),

    // Удалить запрос на интервью
    deleteInterviewRequest: builder.mutation({
      query: (id) => ({
        url: `/interview-requests/${id}`,
        method: 'DELETE',
      }),
      // invalidatesTags: [TAG_TYPES.InterviewRequest],
    }),
  }),
});

export const {
  useGetInterviewRequestByMasteryIdQuery,
  useCreateInterviewRequestMutation,
  useUpdateInterviewRequestMutation,
  useDeleteInterviewRequestMutation,
} = interviewRequestApiSlice;
