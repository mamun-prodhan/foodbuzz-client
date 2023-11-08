import { motion } from "framer-motion";
import { Spinner } from "flowbite-react";
import useRecentBlogs from "../../../hooks/useRecentBlogs";
import Banner from "./Banner";
import NewRecipie from "./NewRecipie";
import NewsLetter from "./NewsLetter";
import RecentBlogCard from "./RecentBlogCard";
import RecipieBooks from "./RecipieBooks";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { data, isLoading, isFetching } = useRecentBlogs();

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
  });

  const fadeInAnimation = {
    hidden: {
      opacity: 0,
      x: -20,
      scale: 0.8,
      rotate: -45,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
    },
  };

  if (isLoading) {
    return (
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInAnimation}
        className="text-center my-20"
      >
        <Spinner aria-label="Center-aligned Extra large spinner example" />
      </motion.div>
    );
  }
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInAnimation}>
      <div>
        <Banner></Banner>
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <h2 className="text-3xl md:text-5xl font-bold text-center my-10">
            Recent Blogs
          </h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {data?.map((blog) => (
                <RecentBlogCard key={blog._id} blog={blog}></RecentBlogCard>
              ))}
            </div>
          </motion.div>
        </div>
        <RecipieBooks></RecipieBooks>
        <NewRecipie></NewRecipie>
        <NewsLetter></NewsLetter>
      </div>
    </motion.div>
  );
};

export default Home;
