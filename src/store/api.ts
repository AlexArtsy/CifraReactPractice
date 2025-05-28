import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://5.39.219.48:3000/api',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: 'auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
    getCurrentUser: builder.query({
      query: () => 'auth/me',
    }),
    getUsers: builder.query({
      query: () => 'users',
    }),
    getUserById: builder.query({
      query: (id) => `users/${id}`,
    }),
    updateUser: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `users/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
    }),
    getPosts: builder.query({
      query: () => 'posts',
    }),
    getPostById: builder.query({
      query: (id) => `posts/${id}`,
    }),
    getUserPostsById: builder.query({
      query: (id) => `posts/user/${id}`,
    }),
    createPost: builder.mutation({
      query: (postData) => ({
        url: 'posts',
        method: 'POST',
        body: postData,
      }),
    }),
    updatePost: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `posts/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
    }),
    getComments: builder.query({
      query: () => 'comments',
    }),
    getCommentById: builder.query({
      query: (id) => `comments/${id}`,
    }),
    createComment: builder.mutation({
      query: (commentData) => ({
        url: 'comments',
        method: 'POST',
        body: commentData,
      }),
    }),
    updateComment: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `comments/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
    deleteComment: builder.mutation({
      query: (id) => ({
        url: `comments/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// Экспортируем хуки для всех эндпоинтов
export const {
  useLoginMutation,
  useRegisterMutation,
  useGetCurrentUserQuery,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetUserPostsByIdQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useGetCommentsQuery,
  useGetCommentByIdQuery,
  useCreateCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = api;
