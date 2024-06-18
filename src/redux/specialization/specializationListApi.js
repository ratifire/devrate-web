import { apiSlice } from '../services/api/apiSlice';

export const specialisationListApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCountryList: builder.query({
      query: () => `data/specialization/specialization-names.json`,
    }),
  }),
});

export const {
  useGetCountryListQuery,
} = specialisationListApiSlice;
