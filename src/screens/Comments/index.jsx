import React, { useEffect, useState } from "react";
import TopBar from "../../components/TopBar";
import Post from "../../components/Post";
import CommentsBox from "./components/CommentsBox";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";
import { BsSend } from "react-icons/bs";

const Comments = () => {
  const { postId } = useParams();

  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const getPostAndComments = async () => {
      const { data: response } = await api.get(`posts/one/${postId}`);
      setPost(response.data);

      const { data: commentsResponse } = await api.get(
        `comments/all/${postId}`
      );
      setComments(commentsResponse.data);
    };
    getPostAndComments();
  }, []);

  const handleSendComment = async () => {
    const { data: response } = await api.post(`comments/new/${postId}`, {
      content: newComment,
    });
    setComments([...comments, response.data]);
    setNewComment("");
  };

  return (
    <div>
      {post && (
        <div>
          <TopBar backButtonEnabled={true} username={post.title} />
          <Post post={post} />
          <CommentsBox comments={comments} />
          <div className="flex my-6 items-center justify-center w-full h-10">
            <input
              type="text"
              placeholder="Descripción"
              onChange={(e) => setNewComment(e.target.value)}
              className="px-3 h-full rounded-lg bg-custom-gray-main border-[0.5px] border-custom-gray-soft w-2/3 focus:outline-none"
            />
            <button onClick={() => handleSendComment()} className="px-5 h-full rounded-lg text-custom-blue-main font-bold">
              Publicar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
