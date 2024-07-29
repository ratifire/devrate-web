import { apiSlice } from './api/apiSlice';

export const skillsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateSkills: builder.mutation({
      query: ({ id, hide }) => ({
        url: `/skills/${id}/hide/${hide}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Skills'],
    }),
  }),
});

export const { useUpdateSkillsMutation } = skillsApiSlice;
