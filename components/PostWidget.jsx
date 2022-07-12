import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";

import { getRecentPosts, getSimilarPosts } from "../services";

function RecentPostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const fetcPosts = async () => {
      if (slug) {
        //if there is slug, it means user is view a specific article/post at the moment
        //therefore get the related posts to the that post being viewed
        const result = await getSimilarPosts(categories, slug);
        setRelatedPosts(result);
      } else {
        // otherwise, get the recent posts
        const result = await getRecentPosts();
        setRecentPosts(result);
      }
    };
    fetcPosts();
  }, [slug, categories]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-2xl mb-8 border-b pb-3">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {recentPosts.map((post) => (
        <div
          key={post.slug}
          className="transition duration-500 transform hover:-translate-y-1 flex items-center w-full mb-4 text-xs hover:text-[#11B288] cursor-pointer"
        >
          <div className="w-16 flex-none">
            <img
              alt={post.title}
              height="60px"
              width="60px"
              src={post.featuredImage.url}
              className="align-middle rounded-lg"
            />
          </div>
          <Link href={`posts/${post.slug}`}>
            <span>
              {post.title} &#160;
              <span className="font-semibold italic">
                Posted On: {moment(post.createdAt).format("MM DD, YYYY")}
              </span>
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default RecentPostWidget;
