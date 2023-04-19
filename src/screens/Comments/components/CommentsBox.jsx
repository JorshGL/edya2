import React from "react";


const CommentsBox = ({ comments }) => {
  return (
    <div className="flex flex-col gap-3 ml-10 mr-5">
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
              <span className="text-xs font-light">{comment.body}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentsBox;
