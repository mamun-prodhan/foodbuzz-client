import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
const WishlistCard = ({ blog }) => {
  const {
    blog_id,
    email,
    title,
    imageURL,
    category,
    shortDescription,
    longDescription,
    createdAt,
    uploadedTime,
  } = blog;
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
        <Link to={`/blogdetails/${blog_id}`}>
          <Button>Details</Button>
        </Link>
        <Button>Remove from Wishlist</Button>
      </div>
    </Card>
  );
};

export default WishlistCard;
