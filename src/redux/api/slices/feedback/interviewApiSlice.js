import { apiSlice } from '@redux/api/apiSlice';
import { TAG_TYPES } from '@utils/constants/tagTypes.js';
import { optimisticDeleteScheduledInterview } from '@redux/api/slices/interviews/helpers/index.js';

const interviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInterviewById: builder.query({
      query: ({ id }) => `/interview-feedbacks/${id}`,
    }),
    createInterview: builder.mutation({
      query: ({ body }) => ({
        method: 'POST',
        url: '/interview-feedbacks',
        body: { ...body },
      }),
      invalidatesTags: [TAG_TYPES.PassedInterview],
      async onQueryStarted({ body: { interviewId } }, { dispatch, queryFulfilled }) {
        return optimisticDeleteScheduledInterview({ dispatch, eventId: interviewId, queryFulfilled });
      },
    }),
  }),
});

export const { useGetInterviewByIdQuery, useCreateInterviewMutation } = interviewApiSlice;
