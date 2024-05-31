import { apiSlice } from '../../services/api/apiSlice';

export const personalApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postPersonalUser: builder.mutation({
      query: (body) => ({
        url: `/users`,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const { usePostPersonalUserMutation } = personalApiSlice;
