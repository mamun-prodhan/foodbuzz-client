import { Button, Card } from "flowbite-react";
import useAuth from "../../../hooks/useAuth";

const RecentBlogCard = ({ blog }) => {
  //   console.log(Object.keys(blog).join(","));
  const { user } = useAuth();
  const {
    _id,
    title,
    imageURL,
    category,
    shortDescription,
    longDescription,
    createdAt,
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

  //   handle add to wishlist
  const handleAddToWishlist = () => {
    if (user) {
      console.log("now add to wishlist");
    }
  };

  return (
    <Card className="max-w-sm" imgAlt="image" imgSrc={imageURL}>
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
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <div className="flex gap-10">
        <Button>Details</Button>
        <Button onClick={handleAddToWishlist}>Add to Wishlist</Button>
      </div>
    </Card>
  );
};

export default RecentBlogCard;
