import useAllWishlist from "../../hooks/useAllWishlist";

const Wishlist = () => {
  const { data, isLoading, isFetching, refetch } = useAllWishlist();
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10">
        This is wishlist page
      </h2>
    </div>
  );
};

export default Wishlist;
