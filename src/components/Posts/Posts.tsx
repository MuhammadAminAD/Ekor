import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import PostItem from "./PostItem";
import { Post } from "@/types/post.types";
import { setPosts } from "@/features/PostsSlice";
import { useGetPostsQuery } from "@/services/PostsService";
import PostsSkeleton from "./PostsSkeleton";

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetPostsQuery({
    language: "uzbek",
    category: "it",
    subCategory: "frontend",
    search: "end",
    price: "Price reduction",
    limit: 20,
    skip: 0,
  });
  useEffect(() => {
    if (data?.data?.length) {
      dispatch(setPosts(data.data));
    }
  }, [data, dispatch]);

  const posts = useSelector((state: RootState) => state.PostsSlice.items);

  if (error) return <p>Xatolik yuz berdi</p>;
  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-[50px] mt-[24px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <PostsSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-[30px] mt-[24px]">
      {posts.map((post: Post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
