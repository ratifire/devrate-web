import { TAG_TYPES } from '@utils/constants/tagTypes.js';
import { apiSlice } from '@redux/api/apiSlice.js';

export const avatarApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAvatarUser: builder.query({
      query: (userId) => `/users/${userId}/pictures`,
      providesTags: (result, error, id) => [{ type: TAG_TYPES.AvatarUser, id }],
    }),

    postAvatarUser: builder.mutation({
      query: ({ userId, avatar }) => ({
        url: `/users/${userId}/pictures`,
        method: 'POST',
        body: avatar,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: TAG_TYPES.AvatarUser, id }],
    }),

    deleteAvatarUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}/pictures`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: TAG_TYPES.AvatarUser, id }],
    }),
  }),
});

export const { useGetAvatarUserQuery, usePostAvatarUserMutation, useDeleteAvatarUserMutation } = avatarApiSlice;
