import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase.js';
import { doc, deleteDoc } from "firebase/firestore";


export const deleteBlogPost = createAsyncThunk('blogData/deleteBlogPost', async (postId) => {
  try {
    const ref = await deleteDoc(doc(db, "blogs-markdown", postId));
    return postId;
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
});
