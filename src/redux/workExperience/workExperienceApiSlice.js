import { apiSlice } from '../services/api/apiSlice';

export const workExperienceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWorkExperienceByUserId: builder.query({
      query: (userId) => `/users/${userId}/employment-records`,
    }),
  }),
});

export const {
  useGetWorkExperienceByUserIdQuery,
} = workExperienceApiSlice;
