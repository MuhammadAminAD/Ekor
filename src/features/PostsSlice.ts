import { Post } from "@/types/post.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostsState {
  items: Post[];
}

const initialState: PostsState = {
  items: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Post[]>) {
      state.items = action.payload;
    },
    addPost(state, action: PayloadAction<Post>) {
      state.items.push(action.payload);
    },
    removePost(state, action: PayloadAction<string>) {
      state.items = state.items.filter((post) => post._id !== action.payload);
    },
  },
});

export const { setPosts, addPost, removePost } = postsSlice.actions;
export default postsSlice.reducer;
