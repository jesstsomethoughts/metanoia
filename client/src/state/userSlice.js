import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './thunks/registerUser';
import { loginUser } from './thunks/loginUser';
import { logoutUser } from './thunks/logoutUser';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {},
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      let { payload } = action;
      const isError = payload.code && payload.name;
      if (isError) {
        state.errorMsg = payload;
        return;
      }
      state.errorMsg = {};
      state.user = action.payload;
    },
    // [loginUser.rejected]: (state, action) => {
      // Can handle connection errors here.
      // Even a login error will be handled in loginUser.fulfilled.
      // state.errorMsg = action.payload;
    // },
    // [loginUser.pending]: (state, action) => {
      // Can also handle wait time, show a loading message/graphic etc.
    // },
    [logoutUser.fulfilled]: (state, action) => {
      // Action has no payload.
      if (action.type === "userData/logoutUser/fulfilled") {
        state.user = null;
      }
    },
    [registerUser.fulfilled]: (state, action) => {
      let { payload } = action;
      const isError = payload.code && payload.name;
      if (isError) {
        state.errorMsg = payload;
        return;
      }
      state.errorMsg = {};
      state.user = action.payload;
    }
  }
})

// How non-thunk actions can be exported:
// export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer
