import { apiSlice } from './api/apiSlice';
import { TAG_TYPES } from '../../utils/constants/tagTypes';

export const educationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEducationByUserId: builder.query({
      query: (userId) => `/users/${userId}/educations`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: TAG_TYPES.Education, id })), TAG_TYPES.Education]
          : [TAG_TYPES.Education],
    }),

    createEducation: builder.mutation({
      query: ({ payload, userId }) => ({
        url: `/users/${userId}/educations`,
        method: 'POST',
        body: {
          ...payload,
          startYear: +payload.startYear,
          endYear: +payload.endYear,
        },
      }),
      invalidatesTags: [TAG_TYPES.Education],
    }),

    updateEducation: builder.mutation({
      query: ({ payload, id }) => ({
        url: `/educations/${id}`,
        method: 'PUT',
        body: {
          ...payload,
          startYear: +payload.startYear,
          endYear: +payload.endYear,
        },
      }),
      invalidatesTags: [TAG_TYPES.Education],
    }),

    deleteEducationById: builder.mutation({
      query(id) {
        return {
          url: `/educations/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id) => [{ type: TAG_TYPES.Education, id }],
    }),
  }),
});

export const {
  useGetEducationByUserIdQuery,
  useCreateEducationMutation,
  useUpdateEducationMutation,
  useDeleteEducationByIdMutation,
} = educationApiSlice;
