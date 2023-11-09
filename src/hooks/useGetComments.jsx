import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetComments = (url2) => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["allComments"],
    queryFn: async () => {
      const response = await axios.get(url2, {
        withCredentials: true,
      });
      return response.data;
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useGetComments;
