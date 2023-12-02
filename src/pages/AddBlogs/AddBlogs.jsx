import axios from "axios";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddBlogs = () => {
  const { user } = useAuth();
  const handleCategory = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const shortDescription = form.shortDescription.value;
    const longDescription = form.longDescription.value;
    const currentDate = new Date();
    const blog = {
      title,
      imageURL,
      category,
      shortDescription,
      longDescription,
      createdAt: currentDate,
      email: user?.email,
      ownerName: user?.displayName,
      ownerImage: user?.photoURL,
    };
    // console.log(blog);
    axios
      .post("https://assignment-11-server-weld-eta.vercel.app/blogs", blog, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res?.data);
        if (res?.data?.insertedId) {
          Swal.fire({
            title: "Successfull",
            text: "Blog Posted Successfully",
            icon: "success",
          });
          form.reset();
        }
      });
  };
  return (
    <div className=" px-4 md:px-0 mb-10">
      <h2 className="text-2xl md:text-5xl font-bold text-center my-5 md:my-10">
        Add Blogs
      </h2>
      {/* form for add blogs */}
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleCategory} className="flex w-full flex-col gap-4">
          {/* row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Blog Title" />
              </div>
              <TextInput
                name="title"
                style={{ zIndex: 1 }}
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
              <Select name="category" id="category" type="text" required>
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
              name="longDescription"
              placeholder="Write your description..."
              required
              rows={6}
            />
          </div>

          <Button className="mt-6" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogs;
