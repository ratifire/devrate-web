import { apiSlice } from '../services/api/apiSlice';

export const SpecializationApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Specialization'],
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

    getHardSkillsByMasteryId: builder.query({
      query: ({ masteryId }) => `/masteries/${masteryId}/hard-skills`,
      providesTags: ['HardSkills'],
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
  useUpdateSpecializationAsMainByIdMutation,
  useGetHardSkillsByMasteryIdQuery,
  useGetMainMasteryBySpecializationIdQuery
} = SpecializationApiSlice;
