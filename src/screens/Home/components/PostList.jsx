import React, { useState, useEffect } from "react";
import useFetch from "./../../../hooks/UseFetch";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const response = useFetch("https://jsonplaceholder.typicode.com/posts");

  useEffect(() => {
    console.log(response.isLoading)
    if (response.data) setPosts(response.data);
  }, [response.data]);

  return (
    <div>
      {response.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="text-white">
          {posts.map((post, index) => (
            <div key={index}>{post.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
