import { useQuery } from "@tanstack/react-query";

const useGetComments = (url2) => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["allComments"],
    queryFn: async () => {
      const data = await fetch(url2);
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useGetComments;
