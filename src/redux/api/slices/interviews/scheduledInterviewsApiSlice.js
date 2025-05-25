import { TAG_TYPES } from '@utils/constants/tagTypes.js';
import { apiSlice } from '@redux/api/apiSlice';

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
        if (arg.page === 0) {
          currentCache.content = newData.content;
        } else {
          currentCache.content.push(...newData.content);
        }
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
  }),
});

export const {
  useGetAllScheduledInterviewsQuery,
  useGetScheduledInterviewByIdQuery,
  useLazyGetSingleInterviewByIdQuery,
  useGetInterviewStatusQuery,
} = scheduledInterviewApiSlice;
