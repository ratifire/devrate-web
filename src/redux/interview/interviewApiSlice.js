import { apiSlice } from '../services/api/apiSlice'

export const interviewApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['InterviewRequest', 'InterviewSummary'],
  endpoints: (builder) => ({
    addInterviewRequest: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/users/${userId}/interview-requests`,
        method: 'POST',
        body: { ...data },
      }),
      invalidatesTags: ['InterviewRequest'],
    }),
    getInterviewSummariesByUserId: builder.query({
      query: (userId) => `/users/${userId}/interview-summaries`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'InterviewSummary', id })), 'InterviewSummary']
          : ['InterviewSummary'],
    }),
    deleteInterviewSummaryById: builder.mutation({
      query: ({ userId, id }) => ({
        url: `/users/${userId}/interview-summaries/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'InterviewSummary', id }],
    }),
  }),
});
export const {
  useAddInterviewRequestMutation,
  useGetInterviewSummariesByUserIdQuery,
  useDeleteInterviewSummaryByIdMutation,
} = interviewApiSlice;
