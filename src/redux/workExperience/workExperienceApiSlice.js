import { apiSlice } from '../services/api/apiSlice';

export const workExperienceApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['WorkExperience'],
  endpoints: (builder) => ({
    getWorkExperienceByUserId: builder.query({
      query: (userId) => `/users/${userId}/employment-records`,
      providesTags: ['WorkExperience'],
    }),

    createNewWorkExperience: builder.mutation({
      query: ({userId, data}) => ({
        url: `/users/${userId}/employment-records`,
        method: "POST",
        body: {...data},
      }),
      invalidatesTags: ['WorkExperience'],
    }),

    updateWorkExperienceById: builder.mutation({
      query({ id, data }) {
        return {
          url: `/employment-records/${id}`,
          method: "PUT",
          body: {...data},
        };
      },
    }),

    deleteWorkExperienceById: builder.mutation({
      query(id) {
        return {
          url: `/employment-records/${id}`,
          method: "DELETE",
        };
      },
    }),

  }),
});

export const {
  useGetWorkExperienceByUserIdQuery,
  useCreateNewWorkExperienceMutation,
  useUpdateWorkExperienceByIdMutation,
  useDeleteWorkExperienceByIdMutation,
} = workExperienceApiSlice;
