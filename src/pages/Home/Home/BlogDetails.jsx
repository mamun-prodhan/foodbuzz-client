import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h2>This is blog details page</h2>
    </div>
  );
};

export default BlogDetails;
