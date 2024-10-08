import { apiSlice } from '../../services/api/apiSlice';

export const specializationListApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['DefSpecializations'],
  endpoints: (builder) => ({
    getSpecializationList: builder.query({
      query: (fileName) => `data/specialization/${fileName}`,
      providesTags: (result, error, id) => (result ? [{ type: 'DefSpecializations', id }] : []),
      transformResponse: (response) => {
        return response.map(str => str.replace(/_/g, ' '));
      },
    }),
  }),
});

export const {
  useGetSpecializationListQuery,
} = specializationListApiSlice;