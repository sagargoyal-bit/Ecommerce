import { Link } from "react-router-dom";

const Navbar = () => {
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

      <div class="flex justify-between mx-4 ">
        <div class="relative flex items-center h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div class="grid place-items-center w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search something.."
          />
        </div>

        <div className="mx-2 text-xl">
          <Link to="/Cart">Cart</Link>
        </div>
        <div />
      </div>
    </div>
  );
};
export default Navbar;
