import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllBlogs = (selectedCategory) => {
  console.log("useAllBlogs", selectedCategory);
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: async () => {
      try {
        const res = await axios.post(
          "https://assignment-11-server-weld-eta.vercel.app/allblogs",
          {
            selectedCategory,
          },
          {
            withCredentials: true,
          }
        );
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
