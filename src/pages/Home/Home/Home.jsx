import useRecentBlogs from "../../../hooks/useRecentBlogs";
import RecentBlogCard from "./RecentBlogCard";

const Home = () => {
  const { data, isLoading, isFetching } = useRecentBlogs();
  if (isLoading) {
    return (
      <h2 className="text-5xl font-bold text-red-600 text-center my-20">
        Loading
      </h2>
    );
  }
  return (
    <div className="max-w-7xl mx-auto ">
      <h2 className="text-5xl font-bold text-center my-10">Recent Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.map((blog) => (
          <RecentBlogCard key={blog._id} blog={blog}></RecentBlogCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
