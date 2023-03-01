import React, { Suspense, lazy } from "react";
import TopBar from "./../../components/TopBar";
const PostList = lazy(() => import("./components/PostList"));

const Home = () => {
  return (
    <div className="bg-black h-screen">
      <TopBar />
      <Suspense fallback={<div>Fallback</div>}>
        <PostList />
      </Suspense>
    </div>
  );
};

export default Home;
