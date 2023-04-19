import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: () => {
    const user = localStorage.getItem("user");
    return {
      user: user ? JSON.parse(user) : null,
      loading: false,
    };
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    setUser: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, setUser } = authSlice.actions;
