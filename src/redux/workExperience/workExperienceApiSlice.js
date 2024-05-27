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

  }),
});

export const {
  useGetWorkExperienceByUserIdQuery,
  useCreateNewWorkExperienceMutation,
} = workExperienceApiSlice;
