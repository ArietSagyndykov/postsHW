import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../helpers/const";
import PostCard from "./PostCard";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data } = await axios(API);
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="cardContainer">
      {posts.map((elem) => (
        <PostCard key={elem.id} {...elem} getPosts={getPosts} />
      ))}
    </div>
  );
};

export default PostList;
