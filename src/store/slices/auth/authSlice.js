import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "",
    email: null,
    displayName: null,
    errorMessage: null,
    photoURL: null,
    uid: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.uid = payload.uid;
      state.errorMessage = null;
    },

    logout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.uid = null;
      state.errorMessage = payload.errorMessage;
    },

    checkingCredentials: (state, _) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
