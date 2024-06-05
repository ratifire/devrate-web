import { apiSlice } from '../services/api/apiSlice';

export const workExperienceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCountryList: builder.query({
      query: () => `/data/user/countries.json`,
    }),
  }),
});

export const {
  useGetCountryListQuery,
} = workExperienceApiSlice;
