import { setUser, startLoading } from "./authSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api/api";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { dispatch }) => {
    dispatch(startLoading());
    const { data: response } = await api.post("auth/login", {
      email,
      password,
    });
    dispatch(setUser(response.data.user));
    localStorage.setItem("token", response.data.token);
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (payload, { dispatch }) => {
    dispatch(startLoading());
    const { data: response } = await api.post("auth/register", payload);
    dispatch(setUser(response.data.user));
    localStorage.setItem("token", response.data.token);
  }
);

export const reauthenticate = createAsyncThunk(
  "auth/reauthenticate",
  async (_, { dispatch }) => {
    dispatch(startLoading());
    try {
      const { data: response } = await api.get("/auth/refresh-token");
      dispatch(setUser(response.data.user));
    } catch (err) {
      localStorage.removeItem("token");
      window.location.reload();
    }
  }
);

