import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase.js';
import { collection, addDoc } from "firebase/firestore";

export const newBlogPost = createAsyncThunk('blogData/newBlogPost', async (postObj) => {
  const {title, author, description, body} = postObj;
  const date = new Date();
  try {
    const ref = await addDoc(collection(db, "blogs-markdown"), {
      title,
      author,
      date,
      description,
      body,
    });

    return {title, author, date, description, body};
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
});
