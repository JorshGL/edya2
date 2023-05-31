import React, { useEffect, useState } from "react";
import TopBar from "../../components/TopBar";
import { useParams } from "react-router-dom";
import UserCard from "./components/UserCard";
import PhotoGrid from "./components/PhotoGrid";
import { api } from "../../api/api";

const Profile = () => {
  const { userId } = useParams();

  const [user, setUser] = useState();
  const [posts, setPosts] = useState();

  const getUser = async () => {
    const { data: response } = await api.get(`users/one/${userId}`);
    setUser(response.data);
  };

  const getPosts = async () => {
    const { data: response } = await api.get(`posts/all?userId=${userId}`);
    setPosts(response.data);
  }

  useEffect(() => {
    getUser();
    getPosts();
  }, []);

  return (
    <div className="h-screen w-full">
      <TopBar
        username={user?.name}
        backButtonEnabled={true}
        chatButtonEnabled={false}
      />

      <UserCard user={user} />
      <PhotoGrid posts={posts} />
    </div>
  );
};

export default Profile;
