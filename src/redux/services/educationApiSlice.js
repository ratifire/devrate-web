import { apiSlice } from './api/apiSlice';

export const educationApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Education'],
  endpoints: (builder) => ({
    getEducationByUserId: builder.query({
      query: (userId) => `/users/${userId}/educations`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Education', id })), 'Education']
          : ['Education'],
    }),

    createEducation: builder.mutation({
      query: ({payload, userId}) => ({
        url: `/users/${userId}/educations`,
        method: 'POST',
        data: {
          ...payload,
          startYear: +payload.startYear,
          endYear: +payload.endYear,
        }
      }),
      invalidatesTags: ['Education'],
    }),

    updateEducation: builder.mutation({
      query: ({payload, id}) => ({
        url: `/educations/${id}`,
        method: 'PUT',
        data: {
          ...payload,
          startYear: +payload.startYear,
          endYear: +payload.endYear,
        }
      }),
      invalidatesTags: ['Education'],
    }),

    deleteEducationById: builder.mutation({
      query(id) {
        return {
          url: `/educations/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [
        { type: 'Education', id },
      ],
    }),

  }),
});

export const {
  useGetEducationByUserIdQuery,
  useCreateEducationMutation,
  useUpdateEducationMutation,
  useDeleteEducationByIdMutation,
} = educationApiSlice;
