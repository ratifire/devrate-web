import { apiSlice } from './api/apiSlice';

export const achievementsApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Achievement'],
  endpoints: (builder) => ({
    fetchAchievements: builder.query({
      query: (userId) => `/users/${userId}/achievements`,
      providesTags: (result) =>
        result ? [...result.map(({ id }) => ({ type: 'Achievement', id })), 'Achievement'] : ['Achievement'],
    }),
    deleteAchievement: builder.mutation({
      query: (id) => ({
        url: `/achievements/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Achievement', id }],
    }),
    updateAchievement: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/achievements/${id}`,
        method: 'PUT',
        body: payload,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Achievement', id }],
    }),
    createAchievement: builder.mutation({
      query: ({ payload, userId }) => ({
        url: `/users/${userId}/achievements`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Achievement'],
    }),
  }),
});

export const {
  useFetchAchievementsQuery,
  useDeleteAchievementMutation,
  useUpdateAchievementMutation,
  useCreateAchievementMutation,
} = achievementsApiSlice;
