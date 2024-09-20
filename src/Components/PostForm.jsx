import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import MDEditor from "@uiw/react-md-editor";
const PostForm = () => {
  const [post, setPost] = useState({ title: "", content: "" });
  
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios
        .get(`https://blog-backend-1w6s.onrender.com/posts/${id}`)
        .then((res) => setPost(res.data));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`https://blog-backend-1w6s.onrender.com/posts/${id}`, post);
    } else {
      await axios.post("https://blog-backend-1w6s.onrender.com/posts", post);
    }
    
  };

  return (
    <div>
      <h1 className="text-3xl mb-5"> {id ? "Edit Post" : "Create Post"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full mb-3"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <MDEditor
          value={post.content}
          onChange={(value) => setPost({ ...post, content: value })}
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 mt-5"
        >
          Save
        </button>
      </form>
    </div>
  );
};
export default PostForm;
