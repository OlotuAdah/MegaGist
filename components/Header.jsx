import React, { useContext } from "react";

import Link from "next/link";

const categories = [
  { name: "React ", slug: "react" },
  { name: "Web Development ", slug: "web-dev" },
];

function Header() {
  return (
    <div className="container mx-auto px-10 mb-8">
      {/* Header */}
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Mega Gist
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {/* on >= md devices display is set to contents, otherwise(i.e. sm) display:none */}
          {/* contents is a taiwind class that makes contents acts like direct children of the parent */}
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className=" md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer ">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
