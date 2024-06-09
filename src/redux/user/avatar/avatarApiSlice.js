import { apiSlice } from '../../services/api/apiSlice';

export const avatarApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['AvatarUser'],
  endpoints: (builder) => ({
    getAvatarUser: builder.query({
      query: (userId) => `/users/${userId}/pictures`,
      providesTags: (result, error, id) => (result ? [{ type: 'AvatarUser', id }] : []),
    }),

    postAvatarUser: builder.mutation({
      query: ({ userId, avatar }) => ({
        url: `/users/${userId}/pictures`,
        method: 'POST',
        body: avatar,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'PersonalUser', id }],
    }),
  }),
});
export const { useGetAvatarUserQuery, usePostAvatarUserMutation } = avatarApiSlice;
