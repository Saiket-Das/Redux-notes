import React from "react";
import { Link } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-indigo-200 h-[calc(100vh-25px)] p-5 rounded-lg">
      <ul className="flex gap-3  flex-col h-full">
        <li>Admin Dashboard</li>
        <li>
          <Link to="/dashboard">Product List</Link>
        </li>
        <li>
          <Link to="add-product"> Add Product </Link>
        </li>
        <li className="flex items-center mt-auto">
          <IoIosArrowBack className="mr-1" />
          <Link to="/">Back to Home </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
