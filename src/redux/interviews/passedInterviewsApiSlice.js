import { apiSlice } from '../services/api/apiSlice';

const passedInterviewApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['PassedInterview'],
  endpoints: (builder) => ({
    getAllPassedInterviews: builder.query({
      query: ({ page, size }) => `/interview-histories?page=${page}&size=${size}`,
      providesTags: (result) =>
        result?.content
          ? [...result.content.map(({ id }) => ({ type: 'PassedInterview', id })), 'PassedInterview']
          : ['PassedInterview'],

      // // Merge new data with existing data
      // serializeQueryArgs: ({ endpointName, queryArgs }) => {
      //   // Use a consistent key for the cache, ignoring `page` and `size`
      //   return `${endpointName}-${queryArgs.size}`;
      // },
      // merge: (currentCache, newData) => {
      //   // Merge the `content` arrays from the current cache and new data
      //   if (currentCache.content && newData.content) {
      //     currentCache.content.push(...newData.content);
      //   }
      // },
      // forceRefetch: ({ currentArg, previousArg }) => {
      //   // Force a refetch if the `page` changes
      //   return currentArg?.page !== previousArg?.page;
      // },

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

export const { useGetAllPassedInterviewsQuery, useGetPassedInterviewByIdQuery } = passedInterviewApiSlice;
