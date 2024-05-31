import { apiSlice } from './api/apiSlice';

export const educationApiSlice = apiSlice.injectEndpoints({
  // tagTypes: ['Education'],
  endpoints: (builder) => ({
    getEducationByUserId: builder.query({
      query: (userId) => `/users/${userId}/educations`,
      // providesTags: (result) =>
      //   result
      //     ? [...result.map(({ id }) => ({ type: 'Education', id })), 'Education']
      //     : ['Post'],
    }),

    createEducation: builder.mutation({
      query: ({payload, userId}) => ({
        url: `/users/${userId}/educations`,
        method: 'POST',
        data: {
          ...payload
        }
      }),
    }),
  }),
});

export const {
  useGetEducationByUserIdQuery,
  useCreateEducationMutation,
} = educationApiSlice;
