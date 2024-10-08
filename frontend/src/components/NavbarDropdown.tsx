import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FiAlignRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NavbarDropdown = () => {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left mr-3">
        <div>
          <Menu.Button className="text-3xl">
            <FiAlignRight />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 text-md">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/signin" // Use Link and specify the "to" attribute
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 font-medium"
                    )}
                  >
                    Login
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/signup" // Use Link and specify the "to" attribute
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 font-medium"
                    )}
                  >
                    Signup
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/dashboard" // Use Link and specify the "to" attribute
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 font-medium"
                    )}
                  >
                    All Blog
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default NavbarDropdown;
