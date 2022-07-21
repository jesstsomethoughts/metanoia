import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAuth,
  signInWithEmailAndPassword,
  // setPersistence,
  // browserSessionPersistence,
} from "firebase/auth";

export const loginUser = createAsyncThunk('userData/loginUser', async (userInfo) => {
  try {
    const auth = getAuth();

    // setPersistence(auth, browserSessionPersistence); // Could use this?

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

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {},
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      console.log('action:', action);
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
      // console.log('action:', action);
      // state.errorMsg = JSON.parse(action.payload);
    // },
    // [loginUser.pending]: (state, action) => {
      // Can also handle wait time, show a loading message/graphic etc.
    // },
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer
