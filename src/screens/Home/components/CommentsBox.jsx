import React, { useEffect, useState } from "react";
import TopBar from "../../../components/TopBar";
import { useParams } from "react-router-dom";
import axios from "axios";

const CommentsBox = () => {
  const { postId } = useParams();

  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );

    const { data: users } = await axios.get(
      `https://randomuser.me/api/?results=${data.length}`
    );

    setComments(
      data.map((comment, index) => {
        return {
          ...comment,
          user: users.results[index],
        };
      })
    );
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      <TopBar
        backButtonEnabled={true}
        username={"Comentarios"}
        chatButtonEnabled={false}
        searchButtonEnabled={false}
      />
      <div className="flex flex-col gap-3 p-3">
        {comments.length > 0 &&
          comments.map((comment, index) => (
            <div key={index} className="flex gap-3">
              <div className="flex items-center self-start aspect-square justify-center rounded-full overflow-hidden p-[1px] bg-gradient-to-tr from-custom-yellow-main via-custom-red-main to-custom-purple-main">
                <img
                  src={comment.user.picture.thumbnail}
                  alt="user pic"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col w-full">
                <span className="font-medium text-sm">
                  {comment.user.name.first} {comment.user.name.last}
                </span>
                <span className="text-xs font-light">
                  {comment.body}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentsBox;
