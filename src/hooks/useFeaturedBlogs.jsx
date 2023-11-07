import { useQuery } from "@tanstack/react-query";

const useFeaturedBlogs = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["featuredBlogs"],
    queryFn: async () => {
      const data = await fetch("http://localhost:5000/featuredblogs");
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useFeaturedBlogs;
