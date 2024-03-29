import React from "react";
import { useNavigate } from "react-router-dom";


const CommentsBox = ({ comments }) => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-3 ml-10 mr-5">
      {comments.length > 0 &&
        comments.map((comment, index) => (
          <div key={index} className="flex gap-3" onClick={() => navigate(`/profile/${comment.user._id}`)}>
            <div className="flex items-center self-start aspect-square max-h-10 justify-center rounded-full overflow-hidden p-[1px] bg-gradient-to-tr from-custom-yellow-main via-custom-red-main to-custom-purple-main">
              <img
                src={comment.user.picture}
                alt="user pic"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <span className="font-medium text-sm">
                {comment.user.name}
              </span>
              <span className="text-xs font-light">{comment.content}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentsBox;
