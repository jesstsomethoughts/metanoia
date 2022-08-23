import { createSlice } from '@reduxjs/toolkit';
import { reqBlogPosts } from './thunks/reqBlogPosts';

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
  }
})

export default blogSlice.reducer
