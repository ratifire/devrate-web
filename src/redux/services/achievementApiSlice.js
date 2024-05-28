import { apiSlice } from './api/apiSlice';

export const achievementApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAchievement: builder.mutation({
      query: ({payload, userId}) => ({
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
  useCreateAchievementMutation,
} = achievementApiSlice;
