import { useQuery } from "@tanstack/react-query";

const useAllBlogs = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: async () => {
      const data = await fetch("http://localhost:5000/allblogs");
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useAllBlogs;
