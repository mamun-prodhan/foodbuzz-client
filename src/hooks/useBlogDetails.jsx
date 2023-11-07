import { useQuery } from "@tanstack/react-query";

const useBlogDetails = (url) => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["blogDetails"],
    queryFn: async () => {
      const data = await fetch(url);
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useBlogDetails;
