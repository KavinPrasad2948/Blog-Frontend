import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

 const PostList = () => {
  const [posts, Setposts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => Setposts(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl mb-5">Blog Post</h1>
      <Link to="/add-post" className="bg-blue-500 text-white px-4 py-2 rounded">
        {" "}
        Create New Post
      </Link>
      <ul className="mt-5">
        {posts.map((post) => (
          <li key={post.id} className="mb-3">
            <Link to={`/posts/${post._id}`} className="text-2xl font-bold">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PostList