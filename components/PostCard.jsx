import React from "react";
import moment from "moment";
import Link from "next/link";

function PostCard({ post }) {
  //   const { post } = props;
  return (
    <div className="bg-white shadow-lg rounded-lg p-2 md:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-center absolute h-80 w-full object-fill rounded-t-lg lg:rounded-lg transition duration-700 transform hover:translate-y-1 "
        />
      </div>
      <h1 className="transition duration-700 hover:translate-x-1 text-center mb-8 cursor-pointer hover:text-[#11B288] text-2xl font-semi-bold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 w-full lg:mb-0 lg:w-auto mr-8">
          <img
            src={post.author.photo.url}
            height="30px"
            width="30px"
            className="align-middle rounded-full border border-[#11B288] transition transform duration-700 hover:translate-x-1 "
          />
          <p className="inline align-middle text-gray-700 text-sm ml-2 ">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-[#11B288]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle text-sm ">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <p className="text-justify text-lg text-gray-700 font-normal lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-1.5 text-white px-8 py-3 bg-[#11B288] rounded-full cursor-pointer inline-block">
            {" "}
            Continue Reading..
          </span>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
