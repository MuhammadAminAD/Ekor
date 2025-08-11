import { Post } from "@/types/post.types";
import { baseApi } from "./baseApi";

export const PostsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<{ ok: boolean; data: Post[] }, Record<string, any>>(
      {
        query: (params = {}) => ({
          url: "/posts",
          method: "GET",
          params,
        }),
      }
    ),
  }),
  overrideExisting: false,
});

export const { useGetPostsQuery } = PostsApi;
