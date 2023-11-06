import { useEffect, useState } from "react";
import useAllBlogs from "../../hooks/useAllBlogs";
import RecentBlogCard from "../Home/Home/RecentBlogCard";

const AllBlogs = () => {
  const { data, isLoading, isFetching, refetch } = useAllBlogs();
  const [allBlogs, setAllBlogs] = useState(data);

  console.log(allBlogs);
  useEffect(() => {
    if (data) {
      setAllBlogs(data);
    }
  }, [data]);

  if (isLoading) {
    return (
      <h2 className="text-5xl font-bold text-red-600 text-center my-20">
        Loading
      </h2>
    );
  }
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center my-10">
        All Blogs : {allBlogs?.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allBlogs?.map((blog) => (
          <RecentBlogCard key={blog._id} blog={blog}></RecentBlogCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
