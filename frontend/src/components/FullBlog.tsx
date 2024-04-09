import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";


export const FullBlog = ({ blog } : { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-2xl">
            <div className="grid col-span-8">
                <div className="text-5xl font-extrabold">
                    {blog.title}
                </div>
                <div className="text-slate-500 pt-2">
                    Posted on 2nd december 2023
                </div>
                <div className="text-2xl pt-4">
                    {blog.content}
                </div>
            </div>
            <div className="grid col-span-4">
                <div className="text-slate-700 text-lg">
                    Author
                </div>
                <div className="flex">
                    <div className="pr-2 mt-1">
                        <Avatar name={blog.author.name || "Anonymous"}/>
                    </div>
                    <div>
                        <div className="text-xl font-bold">
                            {blog.author.name || "Anonymous"}
                        </div>
                        <div className="pt-2 text-slate-500">
                            Random catch phrase about the author's ability to grab the users attention
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  );
};
