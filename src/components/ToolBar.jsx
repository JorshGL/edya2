import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { BsPlusSquare } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ToolBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bottom-0 fixed text-3xl items-center pb-3 h-20 text-white justify-around w-full max-w-3xl bg-custom-gray-main">
      <GrHomeRounded fill="white" />
      <MdFavoriteBorder className="text-4xl" />
      <BsPlusSquare className="cursor-pointer" onClick={() => navigate('/post/new')} />
      <BiBookmark className="text-4xl" />
      <IoSettingsOutline className="text-4xl" />
    </div>
  );
};

export default ToolBar;
