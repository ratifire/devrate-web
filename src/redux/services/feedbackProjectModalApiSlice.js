import { TAG_TYPES } from '../../utils/constants/tagTypes';
import { apiSlice } from './api/apiSlice';

export const feedbackProjectModalApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createFeedback: builder.mutation({
      query: ({ userId, type, text }) => ({
        url: `/users/${userId}/platform-feedbacks`,
        method: 'POST',
        body: { type, text },
      }),
      invalidatesTags: [TAG_TYPES.Feedback],
    }),
  }),
});

export const { useCreateFeedbackMutation } = feedbackProjectModalApiSlice;
