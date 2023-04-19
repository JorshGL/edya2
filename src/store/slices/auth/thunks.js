import axios from "axios";
import { setUser, startLoading } from "./authSlice";

export const login = (username, password) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());
    const { data } = await axios.get("https://randomuser.me/api/");
    dispatch(setUser({...data.results[0], bio: 'Here will be a bio, for now, it is just a random text 🥷'}));
  };
};
