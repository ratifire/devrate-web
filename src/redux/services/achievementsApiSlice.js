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
    updateAchievement: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/achievements/${id}`,
        method: 'PUT',
        body: payload,
      }),
    }),
    createAchievement: builder.mutation({
      query: ({ payload, userId }) => ({
        url: `/users/${userId}/achievements`,
        method: 'POST',
        body: {
          ...payload
        }
      }),
    }),
  }),
});

export const { 
  useFetchAchievementsQuery, 
  useDeleteAchievementMutation, 
  useUpdateAchievementMutation,
  useCreateAchievementMutation,
} = achievementsApiSlice;
