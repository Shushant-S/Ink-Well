import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  const isAuthenticated = localStorage.getItem("token") || "";

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Appbar isAuthenticated={isAuthenticated} />
        <div className="flex justify-center">
          <h1 className="mt-10 bwg-red-300 tracking-wide p-2 text-5xl font-bold text-gray-900 dark:text-gray-100">
            All Blogs
          </h1>
        </div>
        <div className="flex-grow flex justify-center items-center">
          <div className="space-y-8 w-full mx-10">
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Appbar isAuthenticated={isAuthenticated} />
      <div className="flex-grow flex flex-col items-center px-4 sm:px-8 md:px-12">
        <h1 className="mt-10 tracking-wide bwg-red-300 p-2 text-5xl font-bold text-gray-900 dark:text-gray-100">
          All Blogs
        </h1>
        <div className="w-full space-y-8 mv-5">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.authorName || "Anonymous"}
              title={blog.title}
              content={blog.content}
              imageUrl={blog.imageUrl}
              publishedDate={blog.publishedAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
