import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase.js';
import { doc, updateDoc } from "firebase/firestore";

export const updateBlogPost = createAsyncThunk('blogData/updateBlogPost', async (postObj) => {
  const {title, author, description, body, id} = postObj;

  try {
    const ref = await updateDoc(doc(db, "blogs-markdown", id), {
      title,
      author,
      description,
      body,
    });

    return {title, author, description, body};
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
});
