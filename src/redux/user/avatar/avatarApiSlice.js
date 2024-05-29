import { apiSlice } from '../../services/api/apiSlice';

export const avatarApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postAvatarUser: builder.mutation({
      query: ({ userId, avatar }) => ({
        url: `/users/${userId}/pictures`,
        method: 'POST',
        body: avatar,
      }),
    }),
  }),
});
export const { usePostAvatarUserMutation } = avatarApiSlice;
