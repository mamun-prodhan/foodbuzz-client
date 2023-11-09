import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useRecentBlogs = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["recentBlogs"],
    queryFn: async () => {
      const response = await axios.get(
        "https://assignment-11-server-weld-eta.vercel.app/blogs",
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useRecentBlogs;
