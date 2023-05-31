import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../store/slices/posts/thunks";
import Post from "../../../components/Post";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="flex flex-col items-center overflow-hidden bg-black pb-20">
      {loading ? (
        <div>Loading...</div>
      ) : (
        posts.map((post, index) => <Post key={index} post={post} />)
      )}
    </div>
  );
};

export default PostList;
