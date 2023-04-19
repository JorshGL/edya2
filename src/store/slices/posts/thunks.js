import axios from "axios";
import { setPosts } from "./postsSlice";

export const getPosts = () => {
  return async (dispatch, _) => {
    const { data: posts } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const { data: users } = await axios.get(
      "https://randomuser.me/api/?results=100"
    );

    const { data: images } = await axios.get(
      "https://picsum.photos/v2/list?limit=100&random=2"
    );

    const { data: likes } = await axios.get(
      `https://randomuser.me/api/?results=900`
    );

    const getRandomLikes = () => {
      const [start, end] = [
        Math.round(Math.random() * 9),
        Math.round(Math.random() * 900),
      ];
      return likes.results.slice(start, end);
    };

    const mock = await Promise.all(
      posts.slice(0, 100).map(async (post, index) => {
        return {
          ...post,
          image: images[index].download_url,
          user: users.results[index],
          likes: getRandomLikes(),
        };
      })
    );

    dispatch(setPosts(mock));
  };
};
