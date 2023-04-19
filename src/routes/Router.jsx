import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import ChatsHome from "../screens/ChatsHome";
import Chat from "../screens/Chat";
import Profile from "../screens/Profile";
import { useSelector } from "react-redux";
import Login from "../screens/Login";
import CommentsBox from "../screens/Home/components/CommentsBox";

const Router = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {user ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat">
            <Route path="/chat/" element={<ChatsHome />} />
            <Route path="/chat/:userId" element={<Chat />} />
          </Route>
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/post/:postId/comments" element={<CommentsBox />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<Login />} />
        </Routes>
      )}
    </>
  );
};

export default Router;
