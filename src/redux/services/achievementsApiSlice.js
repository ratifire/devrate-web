import { apiSlice } from '../services/api/apiSlice';

export const achievementsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchAchievements: builder.query({
      query: (userId) => `/users/${userId}/achievements`,
    }),
  }),
});

export const { useFetchAchievementsQuery } = achievementsApiSlice;
