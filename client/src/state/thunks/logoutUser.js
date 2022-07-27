import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuth } from "firebase/auth";

export const logoutUser = createAsyncThunk('userData/logoutUser', async () => {
  try {
    const auth = getAuth();
    auth.signOut();
    // No payload to return. Use type.
    return;
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
});
