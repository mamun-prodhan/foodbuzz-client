import { Button, Card } from "flowbite-react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RecentBlogCard = ({ blog }) => {
  //   console.log(Object.keys(blog).join(","));
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    _id,
    title,
    imageURL,
    category,
    shortDescription,
    longDescription,
    createdAt,
    email,
  } = blog;

  // Format the date and time as a string
  const isoDate = new Date(createdAt);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const uploadedTime = isoDate.toLocaleString(undefined, options);
  console.log(uploadedTime);

  const myWishlist = {
    email: user?.email,
    title,
    imageURL,
    category,
    shortDescription,
    longDescription,
    createdAt,
    uploadedTime,
  };

  //   handle add to wishlist
  const handleAddToWishlist = () => {
    if (user) {
      console.log("now add to wishlist", myWishlist);
      //   axios post here
      axios
        .post("http://localhost:5000/wishlist", myWishlist)
        .then((res) => {
          console.log(res?.data);
          if (res?.data?.insertedId) {
            Swal.fire({
              title: "Successfull",
              text: "Successfully added to wishlist",
              icon: "success",
            });
          } else if (res?.data?.code === 11000) {
            console.log("data already exist in database");
            Swal.fire({
              title: "Already Exists",
              text: "Already You Have added in wishlist",
              icon: "error",
            });
          }
        })
        .catch((error) => {
          console.log("Axios error in recent blog card", error);
        });
    }
    if (!user) {
      Swal.fire({
        title: "Please Login",
        text: "You have to login to add wishlist",
        icon: "warning",
      });
      navigate("/login");
    }
  };

  return (
    <Card className="" imgAlt="image" imgSrc={imageURL}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="bg-blue-400">
        Upload : <span className="capitalize">{uploadedTime}</span>
      </p>
      <p>
        Category : <span className="capitalize">{category}</span>
      </p>

      <p className="font-normal text-gray-700 dark:text-gray-400">
        {shortDescription.length > 120
          ? `${shortDescription.slice(0, 120)}...`
          : shortDescription}
      </p>
      <div className="flex gap-10">
        <Link to={`/blogdetails/${_id}`}>
          <Button>Details</Button>
        </Link>
        <Button onClick={handleAddToWishlist}>Add to Wishlist</Button>
      </div>
    </Card>
  );
};

export default RecentBlogCard;
