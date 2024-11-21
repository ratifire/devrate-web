import { apiSlice } from '../services/api/apiSlice';
import { TAG_TYPES } from '../../utils/constants/tagTypes';

export const workExperienceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWorkExperienceByUserId: builder.query({
      query: (userId) => `/users/${userId}/employment-records`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: TAG_TYPES.WorkExperience, id })), TAG_TYPES.WorkExperience]
          : [TAG_TYPES.WorkExperience],
    }),

    getWorkExperienceById: builder.query({
      query: (id) => `/employment-records/${id}`,
    }),

    createNewWorkExperience: builder.mutation({
      query: ({ userId, data }) => {
        const body = {
          ...data,
          ...(data.endDate !== null && { endDate: data.endDate }), // only add endDate if it's not null
        };

        return {
          url: `/users/${userId}/employment-records`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: [TAG_TYPES.WorkExperience],
    }),

    updateWorkExperienceById: builder.mutation({
      query({ id, data }) {
        return {
          url: `/employment-records/${id}`,
          method: 'PUT',
          body: { ...data },
        };
      },
      invalidatesTags: (result, error, arg) => [{ type: TAG_TYPES.WorkExperience, id: arg.id }],
    }),

    deleteWorkExperienceById: builder.mutation({
      query(id) {
        return {
          url: `/employment-records/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id) => [{ type: TAG_TYPES.WorkExperience, id }],
    }),
  }),
});

export const {
  useGetWorkExperienceByUserIdQuery,
  useCreateNewWorkExperienceMutation,
  useUpdateWorkExperienceByIdMutation,
  useDeleteWorkExperienceByIdMutation,
} = workExperienceApiSlice;
