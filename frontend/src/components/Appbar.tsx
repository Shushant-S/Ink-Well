import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import NavbarDropdown from "./NavbarDropdown";
import Logo from "../assets/Logo.png"

interface AppbarTypes {
  isAuthenticated: string;
}

export const Appbar = ({ isAuthenticated }: AppbarTypes) => {
  const username: string | undefined =
    localStorage.getItem("username") || undefined;

  return (
    <div className="bg-white h-20 top-0 flex items-center sticky z-50 text-black drop-shadow-lg">
      <div className="px-4 w-screen flex items-center p-1 justify-between lg:px-8 md:px-4">
        <div className="flex gap-1">
          <Link to="/">
            <div className="flex items-center justify-center">
              <img
                src={Logo}
                alt=""
                className="h-7 w-7 mr-2"
              />
              <a href="/" className="font-bold text-3xl">
                Ink Well
              </a>
            </div>
          </Link>
        </div>

        {!isAuthenticated ? (
          <div>
            <div className="hidden md:flex text-md leading-6 font-semibold text-slate-700 dark:text-slate-200">
              <Link
                to="/signin"
                className="mr-6 hover:underline hover:text-black"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="mr-6 hover:underline hover:text-black"
              >
                Signup
              </Link>
              <Link
                to="/about"
                className="mr-6 justify-center flex text-white bg-gray-800 hover:bg-black hover:drop-shadow-md transition-all ease-in-out focus:outline-none font-medium rounded-md text-sm px-2 py-1 me-2 mb-2"
              >
                Our Story
              </Link>
            </div>
            <div className="visible md:hidden">
              <NavbarDropdown />
            </div>
          </div>
        ) : (
          <Dropdown username={username} />
        )}
      </div>
    </div>
  );
};
