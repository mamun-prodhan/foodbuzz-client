import { useQuery } from "@tanstack/react-query";

const useAllWishlist = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const data = await fetch("http://localhost:5000/wishlist");
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useAllWishlist;
