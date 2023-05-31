import React, { useState } from "react";
import TopBar from "./../../components/TopBar";
import Search from "./components/Search";
import ChatItem from "./components/ChatItem";

const ChatsHome = () => {
  const [users, setUsers] = useState([]);
  return (
    <div className="h-screen w-full">
      <TopBar
        backButtonEnabled={true}
        username={"Chats"}
        chatButtonEnabled={false}
        searchButtonEnabled={false}
      />
      <Search setUsers={setUsers}/>
      <div className="flex flex-col items-center justify-center w-5/6 gap-6 my-10">
        {users.map((user) => (
          <ChatItem user={user} key={user._id} />
        ))}
      </div>
    </div>
  );
};

export default ChatsHome;
