import { apiSlice } from '../services/api/apiSlice';

const scheduledInterviewApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['ScheduledInterview'],
  endpoints: (builder) => ({
    getAllScheduledInterviews: builder.query({
      query: ({ page, size }) => `/interviews?page=${page}&size=${size}`,
      //TODO delete this before push
      // Mock data for development/testing
      transformResponse: (response, meta, arg) => {
        // Return mock data if the backend response is empty
        if (response.content.length === 0) {
          return {
            content: [
              {
                id: Math.floor(Math.random() * 100) + 1,
                masteryLevel: 0,
                specializationName: 'Full Stack Developer',
                startTime: '2025-01-29T11:55:13.177Z',
                role: 'Interview',
                hostId: 8882,
              },
              {
                id: Math.floor(Math.random() * 100) + 1,
                masteryLevel: 1,
                specializationName: 'Front-End Developer',
                startTime: '2025-03-01T14:55:13.177Z',
                role: 'Respondent',
                hostId: 8881,
              },
              {
                id: Math.floor(Math.random() * 100) + 1,
                masteryLevel: 0,
                specializationName: 'Back-End Developer',
                startTime: '2025-04-15T09:30:00.000Z',
                role: 'Interview',
                hostId: 8883,
              },
              {
                id: Math.floor(Math.random() * 100) + 1,
                masteryLevel: 2,
                specializationName: 'DevOps Engineer',
                startTime: '2025-05-10T16:45:00.000Z',
                role: 'Respondent',
                hostId: 8884,
              },
              {
                id: Math.floor(Math.random() * 100) + 1,
                masteryLevel: 1,
                specializationName: 'Mobile App Developer',
                startTime: '2025-06-20T13:20:00.000Z',
                role: 'Interview',
                hostId: 8885,
              },
            ],
            pageable: {
              pageNumber: arg.page,
              pageSize: arg.size,
            },
            totalElements: 20,
            totalPages: 4,
          };
        }
        return response; // Return actual response if available
      },
      providesTags: (result) =>
        result?.content
          ? [...result.content.map(({ id }) => ({ type: 'ScheduledInterview', id })), 'ScheduledInterview']
          : ['ScheduledInterviews'],
    }),
    getScheduledInterviewById: builder.query({
      query: ({ interviewId }) => `/interviews/events/${interviewId}`,
    }),
  }),
});

export const { useGetAllScheduledInterviewsQuery, useGetScheduledInterviewByIdQuery } = scheduledInterviewApiSlice;
