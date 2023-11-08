import { useQuery } from "@tanstack/react-query";

const useAllWishlist = (url) => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const data = await fetch(url);
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useAllWishlist;
