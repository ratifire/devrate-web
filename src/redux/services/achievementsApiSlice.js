import { apiSlice } from '../services/api/apiSlice';

export const achievementsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchAchievements: builder.query({
      query: (userId) => `/users/${userId}/achievements`,
    }),
    deleteAchievement: builder.mutation({
      query: (id) => ({
        url: `/achievements/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useFetchAchievementsQuery, useDeleteAchievementMutation } = achievementsApiSlice;
