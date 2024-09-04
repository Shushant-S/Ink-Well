import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { Avatar } from "./BlogCard";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}


export default function Dropdown({ username }: { username?: string }) {
  return (
    <Menu as="div" className="relative inline-block text-left mr-3">
      <div>
        <Menu.Button className="flex items-center justify-center gap-2 p-1 rounded-full bg-gray-50 text-md font-semibold text-gray-900 hover:drop-shadow-md drop-shadow-sm transition-all ease-in-out">
          <Avatar name={username || ""} />
          <FiChevronDown className="text-black text-md" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-md font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[14rem]"
                  )}
                  title={username}
                >
                  {username}
                </div>
              )}
            </Menu.Item>
            <hr />
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/blogs"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm font-medium"
                  )}
                >
                  All Blogs
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/publish"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm font-medium"
                  )}
                >
                  Publish Blogs
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/about"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm font-medium"
                  )}
                >
                  About Ink Well
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "/";
                  }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left text-sm font-medium"
                  )}
                >
                  Log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
