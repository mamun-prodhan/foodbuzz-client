import { useParams } from "react-router-dom";
import useBlogDetails from "../../../hooks/useBlogDetails";
import { Button, Card, Label, Textarea } from "flowbite-react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const url = `http://localhost:5000/allblogs/${id}`;
  const { data, isLoading, isFetching, refetch } = useBlogDetails(url);

  //   handle comment
  const handleComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const commentData = {
      comment: comment,
      blog_id: id,
      userName: user.displayName,
      userImage: user.photoURL,
      email: user.email,
    };
    console.log(commentData);
    // post comment
    axios
      .post("http://localhost:5000/comments", commentData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (isLoading) {
    return (
      <h2 className="text-5xl font-bold text-red-600 text-center my-20">
        Loading
      </h2>
    );
  }

  return (
    <div className="max-w-7xl mx-auto my-10">
      <Card className="mb-10" imgAlt="blog" imgSrc={data.imageURL}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Summary : </span>
          {data.shortDescription}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Details : </span>
          {data.longDescription}
        </p>
      </Card>
      <Card>
        <h2 className="text-2xl font-bold mb-10">All Comments: </h2>
        {data?.email === user?.email ? (
          <>
            <h2 className="font-bold">Cannot Comment on Own Blog</h2>
          </>
        ) : (
          <>
            <form onSubmit={handleComment}>
              <div className="max-w-md">
                <div className="mb-3 block">
                  <Label htmlFor="comment" value="Write your comment" />
                </div>
                <Textarea
                  id="comment"
                  name="comment"
                  placeholder="Leave a comment..."
                  required
                  rows={4}
                />
              </div>
              <Button className="mt-3" type="submit">
                Post
              </Button>
            </form>
          </>
        )}
      </Card>
    </div>
  );
};

export default BlogDetails;
