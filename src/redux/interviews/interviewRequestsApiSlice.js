import { apiSlice } from '../services/api/apiSlice';
import { TAG_TYPES } from '../../utils/constants/tagTypes';

export const interviewRequestsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInterviewRequest: builder.query({
      query: () => ({
        url: `interview-requests`,
      }),
      providesTags: [TAG_TYPES.InterviewRequest],
    }),

    createInterviewRequest: builder.mutation({
      query(body) {
        return {
          url: `/interview-requests`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: (result, error, arg) => [
        { type: TAG_TYPES.InterviewRequest },
        { type: TAG_TYPES.InterviewRequestByMasteryId, id: arg.masteryId },
      ],
    }),
    updateInterviewRequest: builder.mutation({
      query({ id, body }) {
        return {
          url: `/interview-requests/${id}`,
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: (result, error, arg) => [
        { type: TAG_TYPES.InterviewRequest },
        { type: TAG_TYPES.InterviewRequestByMasteryId, id: arg.body.masteryId },
      ],
    }),

    getInterviewsByMasteryId: builder.query({
      query: (masteryId) => ({
        url: `/interview-requests/masteries/${masteryId}`,
      }),
      providesTags: (result, error, arg) => [{ type: TAG_TYPES.InterviewRequestByMasteryId, id: arg }],
    }),
  }),
});

export const {
  useGetInterviewRequestQuery,
  useCreateInterviewRequestMutation,
  useUpdateInterviewRequestMutation,
  useGetInterviewsByMasteryIdQuery,
} = interviewRequestsApiSlice;
