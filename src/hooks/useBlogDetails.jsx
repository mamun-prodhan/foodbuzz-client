import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useBlogDetails = (url) => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["blogDetails"],
    queryFn: async () => {
      const response = await axios.get(url, {
        withCredentials: true,
      });
      return response.data;
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useBlogDetails;
