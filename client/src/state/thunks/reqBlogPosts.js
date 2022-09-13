import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase.js';
import { collection, getDocs } from 'firebase/firestore';

export const reqBlogPosts = createAsyncThunk('blogData/reqBlogPosts', async () => {
  try {
    const blogCollectionRef = collection(
      db,
      "blogs-markdown"
    );

    const data = await getDocs(blogCollectionRef);

    const docsWithId = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    docsWithId.sort((a, b) => {
      return b.date.seconds - a.date.seconds;
    });

    return docsWithId;
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
});
