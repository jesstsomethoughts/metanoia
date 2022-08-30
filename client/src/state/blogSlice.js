import { createSlice } from '@reduxjs/toolkit';
import { reqBlogPosts } from './thunks/reqBlogPosts';
import { newBlogPost } from './thunks/newBlogPost';
import { updateBlogPost } from './thunks/updateBlogPost';
import { deleteBlogPost } from './thunks/deleteBlogPost';

export const blogSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: null,
  },
  reducers: {},
  extraReducers: {
    [reqBlogPosts.fulfilled]: (state, action) => {
      let { payload } = action;
      const isError = payload.code && payload.name;
      if (isError) {
        state.errorMsg = payload;
        return;
      }
      state.errorMsg = {};
      state.posts = payload;
    },
    [newBlogPost.fulfilled]: (state, action) => {
      let {payload} = action;
      const isError = payload.code && payload.name;
      if (isError) {
        state.errorMsg = payload;
        return;
      }
      state.errorMsg = {};
      state.posts = [payload];
    },
    [updateBlogPost.fulfilled]: (state, action) => {
      let {payload} = action;
      const isError = payload?.code && payload?.name;
      if (isError) {
        state.errorMsg = payload;
        return;
      }
      state.errorMsg = {};
      state.posts = [payload];
    },
    [deleteBlogPost.fulfilled]: (state, action) => {
      let {payload} = action;
      const isError = payload?.code && payload?.name;
      if (isError) {
        state.errorMsg = payload;
        return;
      }
      state.errorMsg = {};
      state.posts = [];
    },
  }
})

export default blogSlice.reducer
