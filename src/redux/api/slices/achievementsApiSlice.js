import { TAG_TYPES } from '@utils/constants/tagTypes.js';
import { apiSlice } from '@redux/api/apiSlice.js';

export const achievementsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchAchievements: builder.query({
      query: (userId) => `/users/${userId}/achievements`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: TAG_TYPES.Achievement, id })), TAG_TYPES.Achievement]
          : [TAG_TYPES.Achievement],
    }),
    deleteAchievement: builder.mutation({
      query: (id) => ({
        url: `/achievements/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: TAG_TYPES.Achievement, id }],
    }),
    updateAchievement: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/achievements/${id}`,
        method: 'PUT',
        body: payload,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: TAG_TYPES.Achievement, id }],
    }),
    createAchievement: builder.mutation({
      query: ({ payload, userId }) => ({
        url: `/users/${userId}/achievements`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: [TAG_TYPES.Achievement],
    }),
  }),
});

export const {
  useFetchAchievementsQuery,
  useDeleteAchievementMutation,
  useUpdateAchievementMutation,
  useCreateAchievementMutation,
} = achievementsApiSlice;
