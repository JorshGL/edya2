import React, { useEffect, useState } from "react";
import TopBar from "../../components/TopBar";
import Post from "../../components/Post";
import CommentsBox from "./components/CommentsBox";
import { useParams } from "react-router-dom";
import axios from "axios";

const Comments = () => {
  const { postId } = useParams();

  const [post, setPost] = useState();

  const getPost = async () => {
    //just a mock
    const { data: user } = await axios.get(
      "https://randomuser.me/api/?results=1"
    );

    const { data: post } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + postId
    );

    const { data: image } = await axios.get(
      "https://picsum.photos/v2/list?limit=1&random=15"
    );

    const { data: comments } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + postId + "/comments"
    );

    const { data: likes } = await axios.get(
      `https://randomuser.me/api/?results=${comments.length}`
    );

    setPost({
      ...post,
      image: image[0].download_url,
      user: user.results[0],
      comments: likes.results.map((user, index) => ({
        ...comments[index],
        user,
      })),
      likes,
    });
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      {post && (
        <div>
          <TopBar />
          <Post post={post} />
          <CommentsBox comments={post.comments} />
        </div>
      )}
    </div>
  );
};

export default Comments;
