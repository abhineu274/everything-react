// slices/postSlice.ts
import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../models/PostModels";
import { PostForm } from "../../pages/CreatePost";

interface PostState {
  posts: IPost[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};
export const createPostAction = createAction<PostForm>("posts/createPost");

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess(state, action: PayloadAction<IPost[]>) {
      state.loading = false;
      state.posts = action.payload;
    },
    fetchPostsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } =
  postSlice.actions;

export default postSlice.reducer;
