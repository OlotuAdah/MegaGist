// import React, { useEffect, useState } from "react";
import Head from "next/head";
// import React, { useState, useRef, useEffect } from "react";

import {
  PostCard,
  PostWidget,
  Categories,
  MoveToTop,
} from "../components/index";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>Mega Gist Home</title>
        <meta
          name="description"
          content="Mega Gist is your one stop blog app for trending articles from all walks of life"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <h1 className="text-3xl font-bold text-blue-300">Hello Next.js</h1> */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="col-span-1 lg:col-span-8 ">
          {posts.map((post, i) => (
            <PostCard key={i.toString()} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          {/* Displays Categories and recent posts by side on lg and under otherwise*/}
          <div className="relative lg:sticky top-8 ">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      <MoveToTop />
    </div>
  );
}
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
