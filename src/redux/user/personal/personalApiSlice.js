import { apiSlice } from '../../services/api/apiSlice';
import {TAG_TYPES} from "../../../utils/constants/tagTypes";

export const personalApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPersonalUser: builder.query({
      query: (userId) => `/users/${userId}`,
      providesTags: (result, error, id) => (result ? [{ type: TAG_TYPES.PersonalUser, id }] : []),
    }),
    putPersonalUser: builder.mutation({
      query: (body) => ({
        url: `/users`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: TAG_TYPES.PersonalUser, id }],
    }),
    deletePersonalUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: TAG_TYPES.PersonalUser, id }],
    }),
  }),
});

export const { useGetPersonalUserQuery, usePutPersonalUserMutation } = personalApiSlice;
