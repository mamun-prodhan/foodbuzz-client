import { useQuery } from "@tanstack/react-query";

const useGetComments = (url) => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["allComments"],
    queryFn: async () => {
      const data = await fetch(url);
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useGetComments;
