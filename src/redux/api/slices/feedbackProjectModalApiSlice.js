import { TAG_TYPES } from '@utils/constants/tagTypes.js';
import { apiSlice } from '@redux/api/apiSlice.js';

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
