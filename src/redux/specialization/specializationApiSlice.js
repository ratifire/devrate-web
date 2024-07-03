import { apiSlice } from '../services/api/apiSlice';

export const SpecializationApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Specialization', 'Masteries','MainMastery', 'HardSkills'],
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

    getMasteriesBySpecializationId: builder.query({
      query: (id) => `/specializations/${id}/masteries`,
    }),

    getMainMasteryBySpecializationId: builder.query({
      query: (specializationId) => `/specializations/${specializationId}/main-mastery`,
      providesTags: (result, error, specializationId) => {
        if (result) {
          return [
            { type: 'MainMastery', id: result.id }, // Tag for the specific mastery
            { type: 'MainMastery', id: specializationId }, // Tag for the specific specialization
            'MainMastery' // General tag for all main masteries
          ];
        } else {
          return [{ type: 'MainMastery', id: specializationId }, 'MainMastery'];
        }
      },
    }),

    setNewMainMasteryBySpecIdAndMasteryId: builder.mutation({
      query({ masteryId, specId, name, softSkillMark, hardSkillMark }) {
        return {
          url: `/specializations/${specId}/set-main-mastery/${masteryId}`,
          method: "PUT",
          body: {id: masteryId, name, softSkillMark, hardSkillMark},
        };
      },
      invalidatesTags: (result, error, arg) => [
        { type: 'MainMastery', id: arg.masteryId }, // Invalidate the specific mastery
        { type: 'MainMastery', id: arg.specId }, // Invalidate the specific specialization
        'MainMastery' // Invalidate all main masteries
      ],
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
