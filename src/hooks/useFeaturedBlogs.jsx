import { useQuery } from "@tanstack/react-query";

const useFeaturedBlogs = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["featuredBlogs"],
    queryFn: async () => {
      const data = await fetch(
        "https://assignment-11-server-ten-pi.vercel.app/featuredblogs"
      );
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useFeaturedBlogs;
