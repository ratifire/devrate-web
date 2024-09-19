// In specializationApiSlice.js

import { apiSlice } from '../services/api/apiSlice';

export const SpecializationApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Specialization', 'Masteries', 'MainMastery', 'HardSkills'],
  endpoints: (builder) => ({
    getSpecializationByUserId: builder.query({
      query: (userId) => `/users/${userId}/specializations`,
      providesTags: (result) =>
        result ? [...result.map(({ id }) => ({ type: 'Specialization', id })), 'Specialization'] : ['Specialization'],
    }),

    getMainSpecialization: builder.query({
      query: (userId) => `/users/${userId}/specializations`,
      providesTags: ['Specialization'],
      transformResponse(result) {
        return result.find(({ main }) => main);
      },
    }),

    createNewSpecialization: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/users/${userId}/specializations`,
        method: 'POST',
        body: { ...data },
      }),
      invalidatesTags: ['Specialization'],
    }),

    deleteSpecializationById: builder.mutation({
      query(id) {
        return {
          url: `/specializations/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id) => [{ type: 'Specialization', id }],
    }),

    getMasteriesBySpecializationId: builder.query({
      query: (id) => `/specializations/${id}/masteries`,
      providesTags: ['Masteries']
    }),

    getMainMasteryBySpecializationId: builder.query({
      query: (specializationId) => `/specializations/${specializationId}/main-mastery`,
      transformResponse(result) {
        return { ...result, level: result.level.charAt(0) + result.level.slice(1).toLowerCase() };
      },
      providesTags: ['Masteries']
    }),

    setNewMainMasteryBySpecIdAndMasteryId: builder.mutation({
      query({ masteryId, specId, name, softSkillMark, hardSkillMark }) {
        return {
          url: `/specializations/${specId}/set-main-mastery/${masteryId}`,
          method: 'PUT',
          body: { id: masteryId, name, softSkillMark, hardSkillMark },
        };
      },
      invalidatesTags: ['Masteries'],
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

    getHardAndSoftSkillsByMasteryId: builder.query({
      query: (id) => `/masteries/${id}`,
      providesTags: (result) =>
        result ? [...result.map(({ id }) => ({ type: 'Masteries', id })), 'Masteries'] : ['Masteries'],
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

    getSoftSkillsByMasteryId: builder.query({
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

    createInterviewRequest: builder.mutation({
      query({ userId, masteryId, role, availableDates }) {
        return {
          url: `/users/${userId}/interview-requests`,
          method: 'POST',
          body: { role, masteryId, availableDates },
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
      invalidatesTags: ['HardSkills', 'SoftSkills'],
    }),

    addSkillsToMastery: builder.mutation({
      query: ({ id, skills }) => ({
        url: `/masteries/${id}/skills/bulk`,
        method: 'POST',
        body: skills,
      }),
      invalidatesTags: ['HardSkills', 'SoftSkills'],
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
  useCreateInterviewRequestMutation,
  useDeleteSpecializationByIdMutation,
  useGetMasteriesBySpecializationIdQuery,
  useLazyGetMasteriesBySpecializationIdQuery,
  useSetNewMainMasteryBySpecIdAndMasteryIdMutation,
  useUpdateSpecializationAsMainByIdMutation,
  useGetHardAndSoftSkillsByMasteryIdQuery,
  useGetHardSkillsByMasteryIdQuery,
  useLazyGetSoftSkillsQuery,
  useGetSoftSkillsByMasteryIdQuery,
  useLazyGetMainMasteryBySpecializationIdQuery,
  useGetMainMasteryBySpecializationIdQuery,
  useAddSkillToMasteryMutation,
  useAddSkillsToMasteryMutation,
  useDeleteSkillByIdMutation,
  useGetSoftSkillsQuery,
} = SpecializationApiSlice;
