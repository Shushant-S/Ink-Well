import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";
import { Footer } from "./Footer";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  const isAuthenticated = localStorage.getItem("token") || "";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Appbar isAuthenticated={isAuthenticated} />
      <div className="flex justify-center px-4 py-10 font-mono">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-screen-xl">
          <div className="lg:col-span-8">
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
              {blog.title}
            </h1>
            <p className="text-sm sm:text-base lg:text-md text-gray-500 dark:text-gray-400 pt-2">
              Posted on {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                About the Author
              </h2>
              <div className="flex items-center mt-4">
                <Avatar name={blog.author.name || "Anonymous"} size={12} />
                <div className="ml-4">
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {blog.author.name || "Anonymous"}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Passionate writer, sharing insights and stories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border bg-black mx-10"/>

      <div className="pb-16 whitespace-pre-line text-lg sm:text-xl lg:text-2xl text-gray-800 dark:text-gray-300 pt-6 leading-relaxed mx-auto max-w-screen-xl px-4 lg:px-20 font-mono">
        {blog.content}
      </div>
      <Footer/>
    </div>
  );
};
