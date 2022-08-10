import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAuth,
  createUserWithEmailAndPassword
} from "firebase/auth";

export const registerUser = createAsyncThunk('userData/registerUser', async (userInfo) => {
  try {
    const auth = getAuth();

    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );
   return JSON.parse(JSON.stringify(userCredential.user));
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
});
