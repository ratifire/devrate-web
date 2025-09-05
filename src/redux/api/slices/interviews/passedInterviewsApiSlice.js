import { apiSlice } from '@redux/api/apiSlice';
import { TAG_TYPES } from '@utils/constants/tagTypes.js';

const passedInterviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPassedInterviews: builder.query({
      query: ({ page, size }) => `/interview-histories?page=${page}&size=${size}`,
      providesTags: (result) =>
        result?.content
          ? [
              ...result.content.map(({ id }) => ({ type: TAG_TYPES.PassedInterview, id })),
              { type: TAG_TYPES.PassedInterview, id: ' LIST' },
            ]
          : [{ type: TAG_TYPES.PassedInterview, id: 'LIST' }],

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
            title: event.attendeeSpecialization,
            date: event.dateTime,
            hostId: event.attendeeId,
            hostFirstName: event.attendeeFirstName,
            hostLastName: event.attendeeLastName,
          };
        });

        return {
          ...result,
          content: transformedContent,
        };
      },
    }),
    getPassedInterviewById: builder.query({
      query: ({ interviewId }) => `/interview-histories/${interviewId}`,
    }),
  }),
});

export const {
  useGetAllPassedInterviewsQuery,
  useLazyGetAllPassedInterviewsQuery,
  useGetPassedInterviewByIdQuery,
  useLazyGetPassedInterviewByIdQuery,
} = passedInterviewApiSlice;
