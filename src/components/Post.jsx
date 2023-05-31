import moment from "moment/moment";
import React, { useState } from "react";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { useSelector } from "react-redux";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const { user: currentUser } = useSelector((state) => state.auth);
  const [liked, setLiked] = useState(Boolean(post.likes.find(like => like._id === currentUser._id)));

  const MONTH_NAMES = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const { user } = post;

  const toggleLike = () => {
    api.put(`posts/like/${post._id}`).then(() => {
      setLiked(!liked);
    });
  };

  const date = moment(post.date);

  return (
    <div className="flex flex-col w-full items-center mb-6">
      <div
        className="flex px-3 gap-3 items-center p-3 self-start cursor-pointer"
        onClick={() => navigate(`/profile/${user._id}`)}
      >
        <div className="flex items-center max-h-20 aspect-square justify-center rounded-full overflow-hidden p-[1px] bg-gradient-to-tr from-custom-yellow-main via-custom-red-main to-custom-purple-main">
          <img
            className="rounded-full"
            src={user.picture}
            alt="user thumbnail"
          />
        </div>
        <div className="flex flex-col w-full text-xs">
          <span className="font-medium">{user.name}</span>
          <span>
            {[date.date(), MONTH_NAMES[date.month()], date.year()].join(" de ")}
          </span>
        </div>
      </div>

      <div>
        <img src={post.photo} alt="Post image" />
      </div>

      <div className="flex flex-col w-full p-4 gap-2">
        <div className="flex items-center w-full text-3xl gap-4">
          <span className="text-4xl cursor-pointer" onClick={toggleLike}>
            {liked ? <MdOutlineFavorite fill="red" /> : <MdFavoriteBorder />}
          </span>
          <FaRegComment
            className="cursor-pointer"
            onClick={() => navigate(`/post/${post._id}`)}
          />
          <BsSend />
          <BiBookmark className="ml-auto text-4xl" />
        </div>

        {post.likes.length > 0 && (
          <div className="flex items-center text-xs font-extralight gap-1 px-2">
            <img
              className="rounded-full h-5 inline mr-1"
              src={post.likes[0].picture}
              alt=""
            />
            Le gusta a <span className="font-medium">{post.likes[0].name}</span>{" "}
            y{" "}
            <span className="font-medium">
              {post.likes.length - 1} personas más.{" "}
            </span>
          </div>
        )}

        <div className="px-3 text-sm">
          <span className="font-medium mr-2">{user.name}</span>
          <span className="font-light">{post.title}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
