import { apiSlice } from './api/apiSlice';

export const feedbackProjectModalApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Feedback'],
  endpoints: (builder) => ({
    createFeedback: builder.mutation({
      query: ({ userId, type, text }) => ({
        url: `/users/${userId}/platform-feedbacks`,
        method: 'POST',
        body: { type, text },
      }),
      invalidatesTags: ['Feedback'],
    }),
  }),
});

export const {
  useCreateFeedbackMutation,
} = feedbackProjectModalApiSlice;
