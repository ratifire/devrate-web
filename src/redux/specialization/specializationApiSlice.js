// In specializationApiSlice.js

import { apiSlice } from '../services/api/apiSlice';

export const SpecializationApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Specialization', 'HardSkills'],
  endpoints: (builder) => ({
    getSpecializationByUserId: builder.query({
      query: (userId) => `/users/${userId}/specializations`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Specialization', id })), 'Specialization']
          : ['Specialization'],
    }),
    createNewSpecialization: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/users/${userId}/specializations`,
        method: 'POST',
        body: { ...data },
      }),
      invalidatesTags: ['Specialization'],
    }),
    getMainMasteryBySpecializationId: builder.query({
      query: (specializationId) => `/specializations/${specializationId}/main-mastery`,
    }),
    updateSpecializationById: builder.mutation({
      query({ id, name }) {
        return {
          url: '/specializations',
          method: 'PUT',
          body: { id, name },
        };
      },
      invalidatesTags: (result, error, arg) => [{ type: 'Specialization', id: arg.id }],
    }),
    getHardSkillsByMasteryId: builder.query({
      query: ({ masteryId }) => `/masteries/${masteryId}/hard-skills`,
      providesTags: ['HardSkills'],
    }),

    getSoftSkills: builder.query({
      query: ({ masteryId }) => `/masteries/${masteryId}/soft-skills`,
      providesTags: ['SoftSkills'],
    }),

    updateSpecializationAsMainById: builder.mutation({
      query({ id, name, main }) {
        return {
          url: `/specializations/${id}/set-main`,
          method: 'PUT',
          body: { id, name, main },
        };
      },
      invalidatesTags: (result, error, arg) => [{ type: 'Specialization', id: arg.id }],
    }),
    addSkillToMastery: builder.mutation({
      query: ({ masteryId, skill }) => ({
        url: `/masteries/${masteryId}/skill`,
        method: 'POST',
        body: skill,
      }),
      invalidatesTags: ['HardSkills'],
    }),
    deleteSkillById: builder.mutation({
      query: (id) => ({
        url: `/skills/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['HardSkills'],
    }),
  }),
});

export const {
  useGetSpecializationByUserIdQuery,
  useCreateNewSpecializationMutation,
  useUpdateSpecializationByIdMutation,
  useUpdateSpecializationAsMainByIdMutation,
  useGetHardSkillsByMasteryIdQuery,
  useGetSoftSkillsQuery,
  useGetMainMasteryBySpecializationIdQuery,
  useAddSkillToMasteryMutation,
  useDeleteSkillByIdMutation,
} = SpecializationApiSlice;
