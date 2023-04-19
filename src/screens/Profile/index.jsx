import React, { useEffect, useState } from "react";
import TopBar from "../../components/TopBar";
import { useParams } from "react-router-dom";
import UserCard from "./components/UserCard";
import PhotoGrid from "./components/PhotoGrid";
import axios from "axios";

const Profile = () => {
  const { userId } = useParams();

  const [user, setUser] = useState();

  const getUser = async () => {
    const { data } = await axios.get(
      "https://randomuser.me/api/?results=1"
    );

    const { data: posts } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const { data: images } = await axios.get(
      "https://picsum.photos/v2/list?limit=11&random=15"
    );

    const { data: likes } = await axios.get(
      `https://randomuser.me/api/?results=30`
    );

    const getRandomLikes = () => {
      const [start, end] = [
        Math.round(Math.random() * 2),
        Math.round(Math.random() * 30),
      ];
      return likes.results.slice(start, end);
    };

    const postList = posts.slice(0, 11).map((post, index) => ({
      ...post,
      image: images[index].download_url,
      likes: getRandomLikes(),
    }));

    setUser({ ...data.results[0], posts: postList })
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="h-screen w-full">
      <TopBar
        username={`${user?.name?.first} ${user?.name?.last}`}
        backButtonEnabled={true}
        chatButtonEnabled={false}
      />

      <UserCard user={user} />
      <PhotoGrid posts={user?.posts} />
    </div>
  );
};

export default Profile;
