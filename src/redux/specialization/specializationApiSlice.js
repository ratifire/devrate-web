// In specializationApiSlice.js

import { apiSlice } from '../services/api/apiSlice';
import { TAG_TYPES } from '../../utils/constants/tagTypes';
import { lvlMastery, masteryLvl } from '../../utils/constants/masteryLvl.js';

export const SpecializationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializationByUserId: builder.query({
      query: (userId) => `/users/${userId}/specializations`,
      transformResponse: (result) =>
        result.map((v) => ({
          ...v,
          mainMasteryLevel: lvlMastery[v.mainMasteryLevel],
        })),
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: TAG_TYPES.Specialization, id })), TAG_TYPES.Specialization]
          : [TAG_TYPES.Specialization],
    }),

    createNewSpecialization: builder.mutation({
      query: ({ userId, name, mainMasteryName, main }) => ({
        url: `/users/${userId}/specializations`,
        method: 'POST',
        body: {
          name,
          mainMasteryLevel: masteryLvl[mainMasteryName],
          main,
        },
      }),
      invalidatesTags: [TAG_TYPES.Specialization],
    }),

    deleteSpecializationById: builder.mutation({
      query: (id) => ({
        url: `/specializations/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, arg) => [
        { type: TAG_TYPES.Specialization, id: arg.id },
        { type: TAG_TYPES.PersonalUser, id: arg.userId },
      ],
    }),
    getUserAllSpecialization: builder.query({
      query: (id) => `/users/${id}/specializations/main-mastery/skills`,
      transformResponse: (result) => {
        return result.map((mastery) => ({
          ...mastery,
          masteryLevel: lvlMastery[mastery.masteryLevel],
        }));
      },
      providesTags: [TAG_TYPES.HardSkills, TAG_TYPES.Specialization, TAG_TYPES.PersonalUser],
    }),
    getMasteriesBySpecializationId: builder.query({
      query: (id) => `/specializations/${id}/masteries`,
      providesTags: [TAG_TYPES.Masteries],
      transformResponse: (result) =>
        result.map((mastery) => {
          return { ...mastery, level: lvlMastery[mastery.level] };
        }),
    }),

    getMainMasteryBySpecializationId: builder.query({
      query: (specializationId) => `/specializations/${specializationId}/main-mastery`,
      transformResponse: (result) => ({ ...result, level: lvlMastery[result.level] }),
      providesTags: (result, error, id) => [{ type: TAG_TYPES.MainMastery, id }],
    }),

    setNewMainMasteryBySpecIdAndMasteryId: builder.mutation({
      query: ({ masteryId, specId }) => ({
        url: `/specializations/${specId}/set-main-mastery/${masteryId}`,
        method: 'PUT',
      }),
      invalidatesTags: [TAG_TYPES.MainMastery, TAG_TYPES.PersonalUser],
    }),

    updateSpecializationById: builder.mutation({
      query({ id, name }) {
        return {
          url: '/specializations',
          method: 'PUT',
          body: { id, name },
        };
      },
      invalidatesTags: [TAG_TYPES.Specialization, TAG_TYPES.PersonalUser],
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
      query: ({ id, name, main }) => ({
        url: `/specializations/${id}/set-main`,
        method: 'PUT',
        body: { id, name, main },
      }),
      invalidatesTags: [TAG_TYPES.Specialization, TAG_TYPES.PersonalUser],
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
