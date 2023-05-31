import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import ChatsHome from "../screens/ChatsHome";
import Chat from "../screens/Chat";
import Profile from "../screens/Profile";
import { useDispatch, useSelector } from "react-redux";
import Login from "../screens/Login";
import Comments from "../screens/Comments";
import Register from "../screens/Register";
import { reauthenticate } from "../store/slices/auth/thunks";
import NewPost from "../screens/NewPost";

const Router = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user && localStorage.getItem("token")) {
      dispatch(reauthenticate());
    }
  }, []);

  return (
    <>
      {user ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/chat">
            <Route path="/chat/" element={<ChatsHome />} />
            <Route path="/chat/:userId" element={<Chat />} />
          </Route>
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/post">
            <Route path="/post/:postId" element={<Comments />} />
            <Route path="/post/new" element={<NewPost />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </>
  );
};

export default Router;
