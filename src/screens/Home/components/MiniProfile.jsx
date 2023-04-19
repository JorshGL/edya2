import React from "react";
import { useSelector } from "react-redux";

const MiniProfile = () => {
  const { user } = useSelector(state => state.auth)

  return (
    <div className="flex h-1/6 bg-black w-full items-center px-5 py-2 gap-3 border-t border-b border-custom-gray-soft">
      <div className="flex items-center max-h-full aspect-square justify-center rounded-full overflow-hidden p-[2px] bg-gradient-to-tr from-custom-yellow-main via-custom-red-main to-custom-purple-main">
        <img
          className="rounded-full overflow-hidden"
          src={user?.picture.large}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-6 h-full justify-center py-3">
        <div className="flex w-full items-center justify-between">
          <span className="font-semibold">
            {user?.name.first} {user?.name.last}
          </span>
          <button className="py-1 px-8 text-xs font-light bg-black rounded-md border-[1px] border-custom-gray-soft">Ver perfil</button>
        </div>
        <span className="text-xs h-2/3 font-light">{user?.bio}</span>
      </div>
    </div>
  );
};

export default MiniProfile;
