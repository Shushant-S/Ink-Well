export const BlogSkeleton = () => {
  return (
    <div className="p-4 mt-5 border-b border-slate-200 pb-4 animate-pulse">
      <div className="flex">
        <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
          <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        </div>
        <div className="text-xs pl-2 flex justify-center flex-col">&#9679;</div>
        <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
          <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        </div>
      </div>
      <div className="text-xl font-semibold pt-2">
        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
      </div>
      <div className="text-md font-thin">
        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
      </div>
      <div className="text-slate-500 text-sm font-thin pt-4">
        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
      </div>
    </div>
  );
};
