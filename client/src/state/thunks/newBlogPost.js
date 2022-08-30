import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase.js';
import { collection, addDoc } from "firebase/firestore";

export const newBlogPost = createAsyncThunk('blogData/newBlogPost', async (postObj) => {
  const {title, author, description, image, body} = postObj;
  const date = new Date();
  const path = "";
  try {
    const ref = await addDoc(collection(db, "blogs-markdown"), {
      title,
      author,
      date,
      description,
      image,
      body,
      path
    });

    return {title, author, date, description, body, path};
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
});
