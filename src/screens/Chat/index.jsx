import React, { useEffect, useState } from "react";
import TopBar from "./../../components/TopBar";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";

const Chat = () => {
  const { userId } = useParams();

  const [user, setUser] = useState({
    name: "Test",
    status: "online",
  });

  useEffect(() => {
    const getUser = async () => {
      const { data: response } = await api.get(`users/one/${userId}`);
      setUser(response.data);
    };
    getUser();
  }, [userId]);

  return (
    <div className="h-screen">
      <TopBar backButtonEnabled={true} user={user} />
    </div>
  );
};

Chat.defaultProps = {
  userId: 10,
};

export default Chat;
