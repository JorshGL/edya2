import moment from "moment/moment";
import React, { useState } from "react";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

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
    setLiked(!liked);
  };

  const date = moment(user.registered.date); // later will be replace with post date
  return (
    <div className="flex flex-col w-full items-center mb-6">
      <div className="flex px-3 gap-3 items-center p-3 self-start cursor-pointer" onClick={() => navigate(`/profile/${user.id}`)}>
        <div className="flex items-center max-h-full aspect-square justify-center rounded-full overflow-hidden p-[1px] bg-gradient-to-tr from-custom-yellow-main via-custom-red-main to-custom-purple-main">
          <img
            className="rounded-full"
            src={user.picture.thumbnail}
            alt="user thumbnail"
          />
        </div>
        <div className="flex flex-col w-full text-xs">
          <span className="font-medium">
            {user.name.first} {user.name.last}
          </span>
          <span>
            {[date.date(), MONTH_NAMES[date.month()], date.year()].join(" de ")}
          </span>
        </div>
      </div>

      <div>
        <img src={post.image} alt="Post image" />
      </div>

      <div className="flex flex-col w-full p-4 gap-2">
        <div className="flex items-center w-full text-3xl gap-4">
          <span className="text-4xl cursor-pointer" onClick={toggleLike}>
            {liked ? <MdOutlineFavorite fill="red" /> : <MdFavoriteBorder />}
          </span>
          <FaRegComment className="cursor-pointer" onClick={() => navigate(`/post/${post.id}/comments`)} />
          <BsSend />
          <BiBookmark className="ml-auto text-4xl" />
        </div>

        {post.likes.length > 0 && (
          <div className="flex items-center text-xs font-extralight gap-1 px-2">
            <img
              className="rounded-full h-5 inline mr-1"
              src={post.likes[0].picture.thumbnail}
              alt=""
            />
            Le gusta a{" "}
            <span className="font-medium">
              {post.likes[0].name.first} {post.likes[0].name.last}
            </span>{" "}
            y{" "}
            <span className="font-medium">
              {post.likes.length} personas más.{" "}
            </span>
          </div>
        )}

        <div className="px-3 text-sm">
          <span className="font-medium mr-2">
            {user.name.first} {user.name.last}
          </span>
          <span className="font-light">{post.title}</span>
        </div>
      </div>
    </div>
  );
};


export default Post;
