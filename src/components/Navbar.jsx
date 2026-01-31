import { Link } from "react-router";
import NavMenus from "./NavMenus";

export default function Navbar() {
  return (
    <div className="navbar max-w-360 mx-auto p-5">
      <div className="flex-1">
        <Link to="/" className="">
          <img className="" src="/assets/img/logo-white.svg" alt="logo" />
        </Link>
      </div>
      <div className="  md:flex-none hidden lg:block  ">
        <ul className="menu menu-horizontal px-1 gap-5 text-white">
          <NavMenus />
        </ul>
        <button className="btn btn-outline border-white text-white ml-5">
          202-555-0188
        </button>
      </div>
      <div className="lg:hidden">
        <div className="dropdown dropdown-bottom dropdown-end ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavMenus />
          </ul>
        </div>
      </div>
    </div>
  );
}
