import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Post not found");
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading post:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h3>Loading...</h3>;
  if (!post) return <h3>Post not found.</h3>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
