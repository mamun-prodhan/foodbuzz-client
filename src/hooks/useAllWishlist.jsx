import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";

const useAllWishlist = (url) => {
  const axiosSecure = useAxiosSecure();
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const response = await axiosSecure.get(url);
      return response.data;
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useAllWishlist;
