import { TAG_TYPES } from '@utils/constants/tagTypes.js';
import { apiSlice } from '@redux/api/apiSlice';
import { optimisticDeleteScheduledInterview } from '@redux/api/slices/interviews/helpers/index.js';
import mergePaginatedContent from './helpers/mergePaginatedContent.js';

const scheduledInterviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllScheduledInterviews: builder.query({
      query: ({ page, size }) => `/interviews?page=${page}&size=${size}`,
      providesTags: (result) =>
        result?.content
          ? [
              ...result.content.map(({ id }) => ({ type: TAG_TYPES.ScheduledInterview, id })),
              { type: TAG_TYPES.ScheduledInterview, id: 'LIST' },
              { type: TAG_TYPES.Event, id: 'LIST' },
            ]
          : [{ type: TAG_TYPES.ScheduledInterview, id: 'LIST' }],

      // Merge new data with existing data
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        // Use a consistent key for the cache, ignoring `page` and `size`
        return `${endpointName}-${queryArgs.size}`;
      },
      merge: (currentCache, newData, { arg }) => {
        // Merge the `content` arrays from the current cache and new data
        return mergePaginatedContent({ arg, currentCache, newData });
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        // Force a refetch if the `page` changes
        return currentArg?.page !== previousArg?.page;
      },

      transformResponse: (result) => {
        const transformedContent = result?.content.map((event) => {
          return {
            ...event,
            title: event.specializationName,
            date: event.startTime,
          };
        });

        return {
          ...result,
          content: transformedContent,
        };
      },
    }),
    getSingleInterviewById: builder.query({
      query: ({ interviewId }) => `/interviews/${interviewId}/visible`,
    }),
    getScheduledInterviewById: builder.query({
      query: ({ interviewId }) => `/interviews/events/${interviewId}`,
    }),
    getInterviewStatus: builder.query({
      query: (zoneName) => `/interviews/status-indicator?userTimeZone=${zoneName}`,
    }),
    getInterviewMeetingUrl: builder.query({
      query: (interviewId) => ({
        url: `/interviews/${interviewId}/meeting`,
        responseHandler: (response) => response.text(),
      }),
    }),
    getAllSkillsForMasteryId: builder.query({
      query: ({ masteryId }) => `/masteries/${masteryId}/skills/all`,
    }),
    getMasteries: builder.query({
      query: (masteryId) => `/masteries/${masteryId}`,
    }),
    deleteInterview: builder.mutation({
      query: ({ eventId }) => ({
        url: `/interviews/${eventId}`,
        method: 'DELETE',
      }),
      async onQueryStarted({ eventId }, { dispatch, queryFulfilled }) {
        return optimisticDeleteScheduledInterview({ dispatch, eventId, queryFulfilled });
      },
    }),
    deleteNotConductedInterview: builder.mutation({
      query: ({ eventId }) => ({
        url: `/interviews/${eventId}/not-conducted`,
        method: 'DELETE',
      }),
      async onQueryStarted({ eventId }, { dispatch, queryFulfilled }) {
        return optimisticDeleteScheduledInterview({ dispatch, eventId, queryFulfilled });
      },
    }),
  }),
});

export const {
  useGetAllScheduledInterviewsQuery,
  useGetScheduledInterviewByIdQuery,
  useLazyGetSingleInterviewByIdQuery,
  useGetInterviewStatusQuery,
  useLazyGetInterviewMeetingUrlQuery,
  useGetAllSkillsForMasteryIdQuery,
  useGetMasteriesQuery,
  useDeleteInterviewMutation,
  useDeleteNotConductedInterviewMutation,
} = scheduledInterviewApiSlice;
