import { TAG_TYPES } from '@utils/constants/tagTypes.js';
import { apiSlice } from '@redux/api/apiSlice.js';

export const skillsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateSkills: builder.mutation({
      query: ({ id, hide }) => ({
        url: `/skills/${id}/hide/${hide}`,
        method: 'PATCH',
      }),
      invalidatesTags: [TAG_TYPES.Skills],
    }),
  }),
});

export const { useUpdateSkillsMutation } = skillsApiSlice;
