// In specializationApiSlice.js

import { apiSlice } from '../services/api/apiSlice';
import { TAG_TYPES } from '../../utils/constants/tagTypes';

export const SpecializationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializationByUserId: builder.query({
      query: (userId) => `/users/${userId}/specializations`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: TAG_TYPES.Specialization, id })), TAG_TYPES.Specialization]
          : [TAG_TYPES.Specialization],
    }),

    getMainSpecialization: builder.query({
      query: (userId) => `/users/${userId}/specializations`,
      providesTags: TAG_TYPES.Specialization,
      transformResponse(result) {
        return result.find(({ main }) => main);
      },
    }),

    createNewSpecialization: builder.mutation({
      query: ({ userId, name, mainMasteryName, main }) => ({
        url: `/users/${userId}/specializations`,
        method: 'POST',
        body: {
          name,
          mainMasteryName: mainMasteryName.toUpperCase(),
          main,
        },
      }),
      invalidatesTags: [TAG_TYPES.Specialization],
    }),

    deleteSpecializationById: builder.mutation({
      query(id) {
        return {
          url: `/specializations/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, arg) => [
        { type: TAG_TYPES.Specialization, id: arg.id },
        { type: TAG_TYPES.PersonalUser, id: arg.userId },
      ],
    }),
    getUserAllSpecialization: builder.query({
      query: (id) => `/users/${id}/specializations/main-mastery/skills`,
      providesTags: [TAG_TYPES.HardSkills, TAG_TYPES.Specialization],
    }),
    getMasteriesBySpecializationId: builder.query({
      query: (id) => `/specializations/${id}/masteries`,
      providesTags: [TAG_TYPES.Masteries],
    }),

    getMainMasteryBySpecializationId: builder.query({
      query: (specializationId) => `/specializations/${specializationId}/main-mastery`,
      transformResponse(result) {
        return { ...result, level: result.level.charAt(0) + result.level.slice(1).toLowerCase() };
      },
      providesTags: (result, error, id) => [{ type: TAG_TYPES.MainMastery, id }],
    }),

    setNewMainMasteryBySpecIdAndMasteryId: builder.mutation({
      query({ masteryId, specId, name, softSkillMark, hardSkillMark }) {
        return {
          url: `/specializations/${specId}/set-main-mastery/${masteryId}`,
          method: 'PUT',
          body: { id: masteryId, name, softSkillMark, hardSkillMark },
        };
      },
      invalidatesTags: (result, error, { masteryId }) => [{ type: TAG_TYPES.MainMastery, id: masteryId }],
    }),

    updateSpecializationById: builder.mutation({
      query({ id, name }) {
        return {
          url: '/specializations',
          method: 'PUT',
          body: { id, name },
        };
      },
      invalidatesTags: (result, error, arg) => [{ type: TAG_TYPES.Specialization, id: arg.id }],
    }),

    getHardAndSoftSkillsByMasteryId: builder.query({
      query: (id) => `/masteries/${id}`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: TAG_TYPES.Masteries, id })), TAG_TYPES.Masteries]
          : [TAG_TYPES.Masteries],
    }),

    getHardSkillsByMasteryId: builder.query({
      query: ({ masteryId }) => `/masteries/${masteryId}/hard-skills`,
      providesTags: [TAG_TYPES.HardSkills],
    }),

    getSoftSkills: builder.query({
      query: (masteryId) => `/masteries/${masteryId}/soft-skills`,
      providesTags: [TAG_TYPES.SoftSkills],
    }),
    getAvailableSoftSkills: builder.query({
      query: () => `/data/specialization/default-soft-skill-names.json`,
      providesTags: [TAG_TYPES.SoftSkills],
    }),

    getSoftSkillsByMasteryId: builder.query({
      query: ({ masteryId }) => `/masteries/${masteryId}/soft-skills`,
      providesTags: [TAG_TYPES.SoftSkills],
    }),

    updateSpecializationAsMainById: builder.mutation({
      query({ id, name, main }) {
        return {
          url: `/specializations/${id}/set-main`,
          method: 'PUT',
          body: { id, name, main },
        };
      },
      invalidatesTags: (result, error, arg) => [
        { type: TAG_TYPES.Specialization, id: arg.id },
        { type: TAG_TYPES.PersonalUser, id: arg.userId },
      ],
    }),

    getInterviewRequest: builder.query({
      query: ({ userId, role, masteryId }) => ({
        url: `/users/${userId}/interview-requests`,
        params: { role, masteryId },
      }),
      providesTags: [TAG_TYPES.Specialization],
    }),

    createInterviewRequest: builder.mutation({
      query({ userId, masteryId, role, availableDates }) {
        return {
          url: `/users/${userId}/interview-requests`,
          method: 'POST',
          body: { role, masteryId, availableDates },
        };
      },
      invalidatesTags: (result, error, arg) => [{ type: TAG_TYPES.Specialization, id: arg.id }],
    }),
    updateInterviewRequest: builder.mutation({
      query({ userId, masteryId, role, availableDates }) {
        return {
          url: `/users/${userId}/interview-requests`,
          method: 'PUT',
          body: { role, masteryId, availableDates },
        };
      },
      invalidatesTags: (result, error, arg) => [{ type: TAG_TYPES.Specialization, id: arg.id }],
    }),
    addSkillToMastery: builder.mutation({
      query: ({ masteryId, skill }) => ({
        url: `/masteries/${masteryId}/skills`,
        method: 'POST',
        body: skill,
      }),
      invalidatesTags: [TAG_TYPES.HardSkills, TAG_TYPES.SoftSkills],
    }),

    addSkillsToMastery: builder.mutation({
      query: ({ id, skills }) => ({
        url: `/masteries/${id}/skills/bulk`,
        method: 'POST',
        body: skills,
      }),
      invalidatesTags: [TAG_TYPES.HardSkills, TAG_TYPES.SoftSkills],
    }),

    createSkillsBulk: builder.mutation({
      query: ({ masteryId, skills }) => ({
        url: `/masteries/${masteryId}/skills/bulk`,
        method: 'POST',
        body: skills,
      }),
      invalidatesTags: [TAG_TYPES.HardSkills, TAG_TYPES.SoftSkills],
    }),
    deleteSkillById: builder.mutation({
      query: (id) => ({
        url: `/skills/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [TAG_TYPES.HardSkills, TAG_TYPES.SoftSkills],
    }),
  }),
});

export const {
  useGetSpecializationByUserIdQuery,
  useGetAvailableSoftSkillsQuery,
  useCreateNewSpecializationMutation,
  useUpdateSpecializationByIdMutation,
  useGetInterviewRequestQuery,
  useCreateInterviewRequestMutation,
  useUpdateInterviewRequestMutation,
  useDeleteSpecializationByIdMutation,
  useGetMasteriesBySpecializationIdQuery,
  useLazyGetMasteriesBySpecializationIdQuery,
  useSetNewMainMasteryBySpecIdAndMasteryIdMutation,
  useUpdateSpecializationAsMainByIdMutation,
  useGetHardSkillsByMasteryIdQuery,
  useGetSoftSkillsByMasteryIdQuery,
  useLazyGetMainMasteryBySpecializationIdQuery,
  useGetMainMasteryBySpecializationIdQuery,
  useAddSkillToMasteryMutation,
  useAddSkillsToMasteryMutation,
  useDeleteSkillByIdMutation,
  useGetSoftSkillsQuery,
  useGetUserAllSpecializationQuery,
} = SpecializationApiSlice;
