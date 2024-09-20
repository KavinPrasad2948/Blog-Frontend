import React from "react";
import { Route, Routes } from "react-router-dom";
import PostList from "./Components/PostList";
import PostDetails from "./Components/PostDetail";
import PostForm from "./Components/PostForm";

const App = () => {
  return (
    <>
      <div className="container mx-auto p-5">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/add-post" element={<PostForm />} />
          <Route path="/edit/:id" element={<PostForm />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
