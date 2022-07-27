import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const loginUser = createAsyncThunk('userData/loginUser', async (userInfo) => {
  try {
    const auth = getAuth();

    const userCredential =
      await signInWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );
    return JSON.parse(JSON.stringify(userCredential.user));
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
});
