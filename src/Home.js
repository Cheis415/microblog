import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

function Home() {
  const blogs = useSelector(state => state);
  const posts = Object.entries(blogs)
  

  return (
    <div className="blog-cards" style={{display: "block"}}>
      {posts.map(([id, blog]) => <div key={id}><Post key={id} id={id} title={blog.title} description={blog.description} /> </div>)}
    </div>
    );
}

export default Home;

