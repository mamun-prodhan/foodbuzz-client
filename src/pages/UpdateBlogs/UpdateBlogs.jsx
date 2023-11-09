import { useParams } from "react-router-dom";
import useBlogDetails from "../../hooks/useBlogDetails";
import {
  Button,
  Label,
  Select,
  Spinner,
  TextInput,
  Textarea,
} from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateBlogs = () => {
  const { id } = useParams();
  console.log(id);
  const { user } = useAuth();
  const url = `http://localhost:5000/allblogs/${id}`;
  const { data, isLoading, isFetching, refetch } = useBlogDetails(url);
  console.log(data);
  //   form data

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const shortDescription = form.shortDescription.value;
    const longDescription = form.longDescription.value;
    const updatedBlog = {
      title,
      imageURL,
      category,
      shortDescription,
      longDescription,
    };
    // updating the data

    axios
      .put(`http://localhost:5000/updatedblogs/${id}`, updatedBlog)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfull",
            text: "Updated Successfully",
            icon: "success",
            button: "OK",
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
    <div>
      <h2 className="text-5xl font-bold text-center my-10">
        Update Your Blogs
      </h2>
      {/* form for add blogs */}
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleUpdate} className="flex w-full flex-col gap-4">
          {/* row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Blog Title" />
              </div>
              <TextInput
                name="title"
                defaultValue={data?.title}
                id="title"
                type="text"
                placeholder="Your Blog Title"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="imageURL" value="Blog Image URL" />
              </div>
              <TextInput
                name="imageURL"
                defaultValue={data?.imageURL}
                id="imageURL"
                type="text"
                placeholder="Your Blog Image URL"
                required
              />
            </div>
          </div>
          {/* row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="category" value="Select Blog Category" />
              </div>
              <Select
                name="category"
                defaultValue={data?.category}
                id="category"
                type="text"
                required
              >
                <option value="soup">Soup</option>
                <option value="salad">Salad</option>
                <option value="healthy">Healthy</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="dinner">Dinner</option>
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="shortDescription" value="Short Description" />
              </div>
              <TextInput
                name="shortDescription"
                defaultValue={data?.shortDescription}
                id="shortDescription"
                type="text"
                placeholder="Blog Short Description"
                required
              />
            </div>
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="longDescription" value="Long description" />
            </div>
            <Textarea
              id="longDescription"
              defaultValue={data.longDescription}
              name="longDescription"
              placeholder="Write your description..."
              required
              rows={6}
            />
          </div>

          <Button className="mt-6" type="submit">
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlogs;
