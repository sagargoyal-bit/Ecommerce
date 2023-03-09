import { useState } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../util/helper";

const Navbar = () => {

  const [searchvalue,setSerchValue] = useState("")

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg py-4 mb-10">
      <h1 className="m-2">
        <Link to="/">heading logo</Link>
      </h1>
      <div>
        <ul className="flex flex-wrap mx-10 ">
          <li className="m-2 text-xl">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="m-2 text-xl">
            <Link to="/About">About us</Link>
          </li>
        </ul>
      </div>

      <div className="flex justify-between mx-4 ">
        <div className="relative flex items-center h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden ">
          <div className="grid place-items-center w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search something.."
            value={searchvalue}
            onChange={(e) => {
              setSerchValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
              filterData(searchvalue);
              }
            }}
          />
        </div>

        <div className="ml-4 text-xl">
          <Link to="/Cart">Cart</Link>
        </div>
        <div />
      </div>
    </div>
  );
};
export default Navbar;
