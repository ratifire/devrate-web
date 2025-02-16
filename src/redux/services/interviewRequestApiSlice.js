import { apiSlice } from './api/apiSlice';

export const interviewRequestApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Получить запросы на интервью по masteryId
    getInterviewRequestByMasteryId: builder.query({
      query: (masteryId) => `/interview-requests/masteries/${masteryId}`,
      transformResponse: (response) => {
        // Обработка ответа, если нужно
        return response;
      },
    }),

    // Создать новый запрос на интервью
    createInterviewRequest: builder.mutation({
      query: (payload) => ({
        url: `/interview-requests`,
        method: 'POST',
        body: {
          role: payload.role,
          availableDates: payload.availableDates,
          comment: payload.comment,
          desiredInterviewDate: payload.desiredInterviewDate,
          desiredNumberOfInterviews: payload.desiredNumberOfInterviews,
        },
      }),
      // invalidatesTags: [TAG_TYPES.InterviewRequest],
    }),

    // Обновить запрос на интервью
    updateInterviewRequest: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/interview-requests/${id}`,
        method: 'PUT',
        body: {
          role: payload.role,
          availableDates: payload.availableDates,
          comment: payload.comment,
          desiredInterviewDate: payload.desiredInterviewDate,
          desiredNumberOfInterviews: payload.desiredNumberOfInterviews,
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
