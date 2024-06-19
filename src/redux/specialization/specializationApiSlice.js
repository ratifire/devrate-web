import { apiSlice } from '../services/api/apiSlice';

export const SpecializationApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Specialisation'],
  endpoints: (builder) => ({
    getSpecializationByUserId: builder.query({
      query: (userId) => `/users/${userId}/specializations`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Specialisation', id })), 'Specialisation']
          : ['Specialisation'],
    }),

  }),
});

export const {
  useGetSpecializationByUserIdQuery,
} = SpecializationApiSlice;
