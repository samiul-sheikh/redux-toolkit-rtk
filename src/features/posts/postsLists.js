import React from "react";
// import { useSelector } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

const postsLists = () => {
  const posts = useSelector((state) => state.posts);

  const renderPosts = posts.map((post) => (
    <articlec key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </articlec>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};

export default postsLists;
