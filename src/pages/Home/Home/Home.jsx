import { motion } from "framer-motion";
import { Spinner } from "flowbite-react";
import useRecentBlogs from "../../../hooks/useRecentBlogs";
import Banner from "./Banner";
import NewRecipie from "./NewRecipie";
import NewsLetter from "./NewsLetter";
import RecentBlogCard from "./RecentBlogCard";
import RecipieBooks from "./RecipieBooks";

const Home = () => {
  const { data, isLoading, isFetching } = useRecentBlogs();

  if (isLoading) {
    return (
      <div className="mx-auto text-center my-20">
        <Spinner aria-label="Center-aligned Extra large spinner example" />
      </div>
    );
  }
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-5xl font-bold text-center my-10">
          Recent Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data?.map((blog) => (
            <RecentBlogCard key={blog._id} blog={blog}></RecentBlogCard>
          ))}
        </div>
      </div>
      <RecipieBooks></RecipieBooks>
      <NewRecipie></NewRecipie>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
