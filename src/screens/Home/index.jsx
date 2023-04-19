import React from "react";
import TopBar from "./../../components/TopBar";
import MiniProfile from "./components/MiniProfile";
import PostList from "./components/PostList";
import ToolBar from "../../components/ToolBar";

const Home = () => {
  return (
    <div className="h-screen">
      <TopBar />
      <MiniProfile />
      <PostList />
      <ToolBar />
    </div>
  );
};

export default Home;
