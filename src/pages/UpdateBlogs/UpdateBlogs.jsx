import { useParams } from "react-router-dom";

const UpdateBlogs = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h2 className="text-5xl font-bold text-center">
        This is update blogs page : {id}
      </h2>
    </div>
  );
};

export default UpdateBlogs;
