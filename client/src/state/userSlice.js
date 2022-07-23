import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
    return JSON.stringify(userCredential.user);
  } catch (error) {
    return JSON.stringify(error);
  }
});

export const logoutUser = createAsyncThunk('userData/logoutUser', async () => {
  try {
    const auth = getAuth();
    auth.signOut();
    // No payload to return. Use type.
    return;
  } catch (error) {
    return JSON.stringify(error);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {},
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      let { payload } = action;
      payload = JSON.parse(payload);
      const isError = payload.code && payload.name;
      if (isError) {
        state.errorMsg = payload;
        return;
      }
      state.errorMsg = {};
      state.user = JSON.parse(action.payload);
    },
    // [loginUser.rejected]: (state, action) => {
      // Can handle connection errors here.
      // Even a login error will be handled in loginUser.fulfilled.
      // state.errorMsg = JSON.parse(action.payload);
    // },
    // [loginUser.pending]: (state, action) => {
      // Can also handle wait time, show a loading message/graphic etc.
    // },
    [logoutUser.fulfilled]: (state, action) => {
      // Action has no payload.
      if (action.type === "userData/logoutUser/fulfilled") {
        state.user = null;
      }
    }
  }
})

// export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer
