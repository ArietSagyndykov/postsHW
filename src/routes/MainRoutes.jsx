import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import EditPost from "../components/EditPost";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path={"/create"} element={<CreatePost />} />
      <Route path={"/posts"} element={<PostList />} />
      <Route path={"/edit/:id"} element={<EditPost />} />
    </Routes>
  );
};

export default MainRoutes;
