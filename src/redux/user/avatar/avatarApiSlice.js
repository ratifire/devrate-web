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
      invalidatesTags: (result, error, { id }) => [{ type: 'AvatarUser', id }],
    }),

    deleteAvatarUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}/pictures`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'AvatarUser', id }],
    }),
  }),
});
export const { useGetAvatarUserQuery, usePostAvatarUserMutation, useDeleteAvatarUserMutation } = avatarApiSlice;
