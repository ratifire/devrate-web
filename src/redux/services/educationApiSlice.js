import { apiSlice } from './api/apiSlice';

export const educationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
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
  useCreateEducationMutation,
} = educationApiSlice;
