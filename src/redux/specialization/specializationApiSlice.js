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
    getMainSpecialization: builder.query({
      query: (userId) => `/users/${userId}/specializations`,
      providesTags: ['Specialization'],
      transformResponse(result) {
        return result.find(({main}) => main);
      }
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
      query: (masteryId) => `/masteries/${masteryId}/soft-skills`,
      providesTags: ['SoftSkills'],
    }),
    getAvailableSoftSkills: builder.query({
      query: () => `/data/specialization/default-soft-skill-names.json`,
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
        url: `/masteries/${masteryId}/skills`,
        method: 'POST',
        body: skill,
      }),
      invalidatesTags: ['HardSkills'],
    }),
    createSkillsBulk: builder.mutation({
      query: ({ masteryId, skills }) => ({
        url: `/masteries/${masteryId}/skills/bulk`,
        method: 'POST',
        body: skills,
      }),
      invalidatesTags: ['HardSkills', 'SoftSkills'],
    }),
    deleteSkillById: builder.mutation({
      query: (id) => ({
        url: `/skills/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['HardSkills', 'SoftSkills'],
    }),
  }),
});

export const {
  useGetSpecializationByUserIdQuery,
  useGetAvailableSoftSkillsQuery,
  useGetMainSpecializationQuery,
  useCreateSkillsBulkMutation,
  useLazyGetMainSpecializationQuery,
  useCreateNewSpecializationMutation,
  useUpdateSpecializationByIdMutation,
  useUpdateSpecializationAsMainByIdMutation,
  useGetHardSkillsByMasteryIdQuery,
  useLazyGetSoftSkillsQuery,
  useGetMainMasteryBySpecializationIdQuery,
  useLazyGetMainMasteryBySpecializationIdQuery,
  useAddSkillToMasteryMutation,
  useDeleteSkillByIdMutation,
} = SpecializationApiSlice;
