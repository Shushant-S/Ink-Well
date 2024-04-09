import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="p-4 border-b border-slate-200 pb-4 cursor-pointer">
      <div className="flex">
        <Avatar name={authorName}/> 
        <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
            {authorName} 
        </div>
        <div className="text-xs pl-2 flex justify-center flex-col">
            &#9679;
        </div>
        <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
            {publishedDate}
        </div>
      </div>
      <div className="text-xl font-semibold pt-2">
        {title}
      </div>
      <div className="text-md font-thin">
        {content.slice(0, 100) + "..."}
        </div>
      <div className="text-slate-500 text-sm font-thin pt-4">
        {`${Math.ceil(content.length / 100)} minute(s) read`}
      </div>
    </div>
    </Link>
  );
}; 


export function Avatar({ name, size = 6 } : { name: string, size?: number }) {
  return <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full`}>
    <span className="text-xs font-extralight text-gray-600 dark:text-gray-300">{name[0]}</span>
  </div>;
}
