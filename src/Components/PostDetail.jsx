import React, { useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => setPost(res.data));
  }, [id]);
  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/posts/${id}`);
    window.location.href = "/";
  };

  return (
    <div>
      <h1 className="text-3xl mb-5">{post.title}</h1>
      <ReactMarkdown>{post.content}</ReactMarkdown>
      <div className="mt-5">
        <Link
          to={`/edit/${id}`}
          className="bg-yellow-500 text-white font-bold px-4 py-2 mr-3"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 mr-3 font-bold"
          >Delete</button>
          </div>
    </div>
  );
};
export default PostDetail;
