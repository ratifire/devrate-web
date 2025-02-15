import { apiSlice } from '../services/api/apiSlice';
import { TAG_TYPES } from '../../utils/constants/tagTypes.js';

const scheduledInterviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllScheduledInterviews: builder.query({
      query: ({ page, size }) => `/interviews?page=${page}&size=${size}`,
      providesTags: (result) =>
        result?.content
          ? [
              ...result.content.map(({ id }) => ({ type: TAG_TYPES.ScheduledInterview, id })),
              TAG_TYPES.ScheduledInterview,
            ]
          : [TAG_TYPES.ScheduledInterview],

      // Merge new data with existing data
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        // Use a consistent key for the cache, ignoring `page` and `size`
        return `${endpointName}-${queryArgs.size}`;
      },
      merge: (currentCache, newData) => {
        // Merge the `content` arrays from the current cache and new data
        if (currentCache.content && newData.content) {
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
    getScheduledInterviewById: builder.query({
      query: ({ interviewId }) => `/interviews/events/${interviewId}`,
    }),
  }),
});

export const { useGetAllScheduledInterviewsQuery, useGetScheduledInterviewByIdQuery } = scheduledInterviewApiSlice;
