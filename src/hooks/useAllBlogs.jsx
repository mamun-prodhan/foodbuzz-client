import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllBlogs = (selectedCategory, search) => {
  console.log("useAllBlogs", selectedCategory);
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: async () => {
      try {
        const res = await axios.post("http://localhost:5000/allblogs", {
          selectedCategory,
          search,
        });
        return res.data;
      } catch (error) {
        console.log(error);
        throw new Error(error.message);
      }
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useAllBlogs;
