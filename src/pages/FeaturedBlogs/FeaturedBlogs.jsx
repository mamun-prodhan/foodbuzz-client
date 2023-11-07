import { useEffect, useState } from "react";
import useFeaturedBlogs from "../../hooks/useFeaturedBlogs";

const FeaturedBlogs = () => {
  const [topBlogs, setTopBlogs] = useState([]);
  const { data: blogData, isLoading, isFetching, refetch } = useFeaturedBlogs();
  //   console.log(blogData);
  console.log(topBlogs);

  useEffect(() => {
    if (blogData) {
      // Calculate word counts and sort the blogs
      const sortedBlogs = blogData
        .map((blog) => ({
          ...blog,
          wordCount: blog?.longDescription?.split(/\s+/).length || 0, // Set wordCount to 0 if longDescription is undefined
        }))
        .sort((a, b) => b.wordCount - a.wordCount);

      // Select the top 10 blogs
      const top10Blogs = sortedBlogs.slice(0, 10);

      setTopBlogs(top10Blogs);
    }
  }, [blogData]);

  if (isLoading) {
    return (
      <h2 className="text-5xl font-bold text-red-600 text-center my-20">
        Loading
      </h2>
    );
  }
  return (
    <div>
      <h2 className="text-5xl font-bold text-center my-10">
        This is Featured Blogs Page
      </h2>
      {topBlogs?.map((blog) => (
        <p key={blog._id}>{blog.title}</p>
      ))}
    </div>
  );
};

export default FeaturedBlogs;
