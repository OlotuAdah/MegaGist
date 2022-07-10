import React from "react";

function PostCard({ post, key }) {
  //   const { post } = props;
  return (
    <div key={key}>
      {post.title}
      {post.excerpt}
    </div>
  );
}

export default PostCard;
