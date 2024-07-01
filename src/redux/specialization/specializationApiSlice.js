import { apiSlice } from '../services/api/apiSlice';

export const SpecializationApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Specialization', 'Masteries', 'HardSkills'],
  endpoints: (builder) => ({
    getSpecializationByUserId: builder.query({
      query: (userId) => `/users/${userId}/specializations`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Specialization', id })), 'Specialization']
          : ['Specialization'],
    }),

    createNewSpecialization: builder.mutation({
      query: ({userId, data}) => ({
        url: `/users/${userId}/specializations`,
        method: "POST",
        body: {...data},
      }),
      invalidatesTags: ['Specialization'],
    }),

    getMainMasteryBySpecializationId: builder.query({
      query: (specializationId) => `/specializations/${specializationId}/main-mastery`,
    }),

    setNewMainMasteryBySpecIdAndMasteryId: builder.mutation({
      query({ masteryId, specId, name, softSkillMark, hardSkillMark }) {
        return {
          url: `/specializations/${specId}/set-main-mastery/${masteryId}`,
          method: "PUT",
          body: {id: masteryId, name, softSkillMark, hardSkillMark},
        };
      },
    }),

    updateSpecializationById: builder.mutation({
      query({ id, name }) {
        return {
          url: '/specializations',
          method: "PUT",
          body: {id: id, name},
        };
      },
      invalidatesTags: (result, error, arg) => [{ type: 'Specialization', id: arg.id }],
    }),

    getMasteriesBySpecializationId: builder.query({
      query: (id) => `/specializations/${id}/masteries`,
    }),

    getHardAndSoftSkillsByMasteryId: builder.query({
      query: (id) => `/masteries/${id}`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Masteries', id })), 'Masteries']
          : ['Masteries'],
    }),

    getHardSkillsByMasteryId: builder.query({
      query: ({ masteryId }) => `/masteries/${masteryId}/hard-skills`,
      providesTags: ['HardSkills'],
    }),

    getSoftSkillsByMasteryId: builder.query({
      query: ({ masteryId }) => `/masteries/${masteryId}/soft-skills`,
      providesTags: ['Softskills'],
    }),

    updateSpecializationAsMainById: builder.mutation({
      query({ id, name, main }) {
        return {
          url: `/specializations/${id}/set-main`,
          method: "PUT",
          body: {id: id, name, main},
        };
      },
      invalidatesTags: (result, error, arg) => [{ type: 'Specialization', id: arg.id }],
    }),

  }),
});

export const {
  useGetSpecializationByUserIdQuery,
  useCreateNewSpecializationMutation,
  useUpdateSpecializationByIdMutation,
  useGetMasteriesBySpecializationIdQuery,
  useLazyGetMasteriesBySpecializationIdQuery,
  useSetNewMainMasteryBySpecIdAndMasteryIdMutation,
  useUpdateSpecializationAsMainByIdMutation,
  useGetHardAndSoftSkillsByMasteryIdQuery,
  useGetHardSkillsByMasteryIdQuery,
  useGetSoftSkillsByMasteryIdQuery,
  useLazyGetMainMasteryBySpecializationIdQuery
} = SpecializationApiSlice;
