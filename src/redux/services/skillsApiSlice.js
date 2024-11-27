import { apiSlice } from './api/apiSlice';
import {TAG_TYPES} from "../../utils/constants/tagTypes";

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
