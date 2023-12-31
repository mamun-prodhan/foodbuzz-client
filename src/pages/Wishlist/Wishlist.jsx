import axios from "axios";
import useAllWishlist from "../../hooks/useAllWishlist";
import useAuth from "../../hooks/useAuth";
import RecentBlogCard from "../Home/Home/RecentBlogCard";
import WishlistCard from "./WishlistCard";
import Swal from "sweetalert2";
import { Spinner } from "flowbite-react";

const Wishlist = () => {
  const { user } = useAuth();
  const url = `/wishlist?email=${user?.email}`;
  const { data, isLoading, isFetching, refetch } = useAllWishlist(url);

  // delete wishlist
  const handleDeleteWishlist = (_id) => {
    console.log("handle wishlist delete clicked", _id);
    axios
      .delete(
        `https://assignment-11-server-weld-eta.vercel.app/wishlist/${_id}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res?.data?.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Successfull",
            text: "Successfully Deleted",
            icon: "success",
          });
        }
      });
  };

  if (isLoading) {
    return (
      <div className="text-center my-20">
        <Spinner aria-label="Center-aligned Extra large spinner example" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      {/* if no data found */}
      <h2 className="text-2xl md:text-5xl font-bold text-center my-5 md:my-10">
        My Wishlists
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.map((blog) => (
          <WishlistCard
            key={blog._id}
            blog={blog}
            handleDeleteWishlist={handleDeleteWishlist}
          ></WishlistCard>
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
