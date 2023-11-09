import { Link, useParams } from "react-router-dom";
import useBlogDetails from "../../../hooks/useBlogDetails";
import { Button, Card, Label, Spinner, Textarea } from "flowbite-react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import useGetComments from "../../../hooks/useGetComments";
import Swal from "sweetalert2";
import CommentCard from "./CommentCard";

const BlogDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const url = `https://assignment-11-server-weld-eta.vercel.app/allblogs/${id}`;
  const url2 = `https://assignment-11-server-weld-eta.vercel.app/comments/${id}`;
  const { data, isLoading, isFetching, refetch } = useBlogDetails(url);
  //  get comments data

  const {
    data: data2,
    isLoading: isLoading2,
    isFetching: isFetching2,
    refetch: refetch2,
  } = useGetComments(url2);

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
      .post(
        "https://assignment-11-server-weld-eta.vercel.app/comments",
        commentData,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          refetch2();
          e.target.reset();
          Swal.fire({
            title: "Successfull",
            text: "Comment added successfully",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        console.log(error);
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
    <div className="max-w-7xl mx-auto my-10 px-4 md:px-0">
      <Card className="mb-10" imgAlt="blog" imgSrc={data?.imageURL}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data?.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Summary : </span>
          {data?.shortDescription}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Details : </span>
          {data?.longDescription}
        </p>
        {data?.email === user?.email && (
          <Link to={`/updateblog/${data?._id}`}>
            <Button>Update</Button>
          </Link>
        )}
      </Card>
      <Card>
        <h2 className="text-xl md:text-2xl font-bold mb-10">All Comments: </h2>
        {isLoading2 ? (
          <>
            <h2 className="text-red-600 text-xl font-bold">Loading Comments</h2>
          </>
        ) : (
          <>
            {data2?.map((singleComment) => (
              <CommentCard
                key={singleComment._id}
                singleComment={singleComment}
              ></CommentCard>
            ))}
          </>
        )}
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
