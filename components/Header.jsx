import React, { useContext, useState, useEffect } from "react";

import Link from "next/link";
import { getCategories } from "../services";

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getCategories();
      setCategories(result);
    };
    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      {/* Header */}
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/" passHref>
            <span className="cursor-pointer font-bold text-4xl text-white">
              Mega Gist
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents ">
          {/* on >= md devices display is set to contents, otherwise(i.e. sm) display:none */}
          {/* contents is a taiwind class that makes contents acts like direct children of the parent */}
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              passHref
            >
              <span className=" md:float-right mt-2 align-middle text-white ml-4 font-semibold transition duration-700 transform hover:-translate-x-1 cursor-pointer ">
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
