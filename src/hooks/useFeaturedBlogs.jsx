import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFeaturedBlogs = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["featuredBlogs"],
    queryFn: async () => {
      const response = await axios.get(
        "https://assignment-11-server-weld-eta.vercel.app/featuredblogs",
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useFeaturedBlogs;
