import useAllWishlist from "../../hooks/useAllWishlist";
import useAuth from "../../hooks/useAuth";
import RecentBlogCard from "../Home/Home/RecentBlogCard";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
  const { user } = useAuth();
  const url = `http://localhost:5000/wishlist?email=${user?.email}`;
  const { data, isLoading, isFetching, refetch } = useAllWishlist(url);

  if (isLoading) {
    return (
      <h2 className="text-5xl font-bold text-red-600 text-center my-10">
        Loading
      </h2>
    );
  }

  return (
    <div className="max-w-7xl mx-auto ">
      {/* if no data found */}
      <h2 className="text-5xl font-bold text-center my-10">My Wishlists</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.map((blog) => (
          <WishlistCard key={blog._id} blog={blog}></WishlistCard>
        ))}
      </div>
      {!data?.length && (
        <div>
          <h2 className="text-3xl font-bold text-center text-red-600 my-20">
            No data Available
          </h2>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
