import { apiSlice } from '../../services/api/apiSlice';
import { TAG_TYPES } from '../../../utils/constants/tagTypes';

export const specializationListApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializationList: builder.query({
      query: (fileName) => `data/specialization/${fileName}`,
      providesTags: (result, error, id) => (result ? [{ type: TAG_TYPES.DefSpecializations, id }] : []),
      transformResponse: (response) => {
        return response.map((str) => str.replace(/_/g, ' '));
      },
    }),
  }),
});

export const { useGetSpecializationListQuery } = specializationListApiSlice;
