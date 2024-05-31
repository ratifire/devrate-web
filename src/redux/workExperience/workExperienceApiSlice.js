import { apiSlice } from '../services/api/apiSlice';

export const workExperienceApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['WorkExperience'],
  endpoints: (builder) => ({
    getWorkExperienceByUserId: builder.query({
      query: (userId) => `/users/${userId}/employment-records`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'WorkExperience', id })), 'WorkExperience']
          : ['Post'],
    }),

    getWorkExperienceById: builder.query({
      query: (id) => `/employment-records/${id}`,
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
      invalidatesTags: (result, error, arg) => [{ type: 'WorkExperience', id: arg.id }],
    }),

    deleteWorkExperienceById: builder.mutation({
      query(id) {
        return {
          url: `/employment-records/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [
        { type: 'WorkExperience', id },
      ],
    }),

  }),
});

export const {
  useGetWorkExperienceByUserIdQuery,
  useGetWorkExperienceByIdQuery,
  useCreateNewWorkExperienceMutation,
  useUpdateWorkExperienceByIdMutation,
  useDeleteWorkExperienceByIdMutation,
} = workExperienceApiSlice;
