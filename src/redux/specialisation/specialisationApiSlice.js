import { apiSlice } from '../services/api/apiSlice';

export const SpecialisationApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Specialisation'],
  endpoints: (builder) => ({
    getSpecialisationByUserId: builder.query({
      query: (userId) => `/users/${userId}/specializations`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Specialisation', id })), 'Specialisation']
          : ['Specialisation'],
    }),

  }),
});

export const {
  useGetSpecialisationByUserIdQuery,
} = SpecialisationApiSlice;
