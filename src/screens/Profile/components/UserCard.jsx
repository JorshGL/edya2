import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="flex flex-col">
      <div className="flex h-1/6 w-full items-center px-5 py-2 gap-3 justify-around">
        <div className="flex max-h-32 flex-col items-center aspect-square justify-center rounded-full overflow-hidden p-[2px] bg-gradient-to-tr from-custom-yellow-main via-custom-red-main to-custom-purple-main mr-auto">
          <img
            className="rounded-full object-scale-down"
            src={user?.picture}
            alt=""
          />
        </div>
        <div className="flex justify-around w-full">
          <div className="flex flex-col items-center">
            <span className="font-medium text-xl">123</span>
            <span className="font-light text-xs">Publicaciones</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium text-xl">2,456</span>
            <span className="font-light text-xs">Seguidores</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium text-xl">3.4 mill.</span>
            <span className="font-light text-xs">Seguidos</span>
          </div>
        </div>
      </div>

      <div className="px-5 mt-2 font-semibold">
        {user?.name}
      </div>
      <div className="px-5 font-light text-xs">
        {user?.bio}
      </div>

      <div className="flex w-full justify-center gap-5 py-10">
        <button className="w-5/12 bg-custom-blue-main rounded-md p-1 border-[0.5px] border-custom-gray-soft">Seguir</button>
        <button className="w-5/12 bg-black rounded-md p-1 border-[0.5px] border-custom-gray-soft">Mensaje</button>
      </div>
    </div>
  );
};

export default UserCard;
