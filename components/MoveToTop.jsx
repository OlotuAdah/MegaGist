import Link from "next/link";
// import React, {useref} from "react";

function MoveToTop() {
  return (
    <div className="fixed z-50 bottom-8 right-4 cursor-pointer">
      <Link href="/" passHref>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" transition duration-700 hover:-translate-y-2 h-10 w-10 text-[#495FAC] "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
}

export default MoveToTop;
