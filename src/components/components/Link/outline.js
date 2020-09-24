import React from "react";
import { Link } from "@reach/router";

export default function (props) {
  return (
    <span className="shadow-sm rounded-md">
      <Link
        to={props.to}
        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out capitalize bg-gradient-to-r from-white to-gray-100"
      >
        {props.children}
      </Link>
    </span>
  );
}