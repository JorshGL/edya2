import React from "react";
import { useNavigate } from "react-router-dom";

const ChatItem = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-20 items-center gap-4 cursor-pointer" onClick={() => navigate(`${user._id}`)}>
      <div className="flex items-center max-h-20 aspect-square justify-center rounded-full overflow-hidden p-[1px] bg-gradient-to-tr from-custom-yellow-main via-custom-red-main to-custom-purple-main">
        <img className="rounded-full" src={user.picture} alt="user thumbnail" />
      </div>
      <div className="flex flex-col w-2/3">
        <span className="font-bold">
          {user.name}
        </span>
        <span className="font-light opacity-50">
          {user.username}
        </span>
      </div>
    </div>
  );
};

export default ChatItem;
