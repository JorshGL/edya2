import React from "react";
import TopBar from "./../../components/TopBar";

const ChatsHome = () => {
  return (
    <div className="h-screen">
      <TopBar
        backButtonEnabled={true}
        username={"Chats"}
        chatButtonEnabled={false}
        searchButtonEnabled={false}
      />
    </div>
  );
};

export default ChatsHome;
