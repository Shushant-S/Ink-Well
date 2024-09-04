import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  imageUrl: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
  imageUrl,
}: BlogCardProps) => {
  const formattedDate = new Date(publishedDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      to={`/blog/${id}`}
      className="mt-5 block p-6 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-3xl transition font-mono mx-4 sm:mx-8 lg:mx-28"
    >
      <div className="border-b border-slate-200 dark:border-slate-700 flex flex-col lg:flex-row items-start justify-between">
        <div className="flex w-full lg:w-3/4 flex-col flex-grow">
          <div className="flex items-center">
            <Avatar name={authorName} size={8} />
            <div className="ml-3">
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {authorName}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Published on {formattedDate}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-black dark:text-gray-100 break-words">
              {title}
            </h2>
            <p className="mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-400 break-words">
              {content.slice(0, 120) + "..."}
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {`${Math.ceil(content.replace(/\s+/g, "").length / 238)} minute(s) read`}
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-full lg:w-1/4 h-[220px] mt-4 lg:mt-0 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="rounded-xl h-40 w-40 object-cover lg:h-48 lg:w-48"
          />
        </div>
      </div>
    </Link>
  );
};

export function Avatar({ name, size = 8 }: { name: string; size?: number }) {
  return (
    <div
      className={`inline-flex items-center justify-center w-${size} h-${size} bg-gray-200 dark:bg-gray-700 rounded-full`}
    >
      <span className="text-md p-1 px-3 font-semibold text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
