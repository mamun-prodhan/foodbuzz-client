import { useEffect, useState } from "react";
import useAllBlogs from "../../hooks/useAllBlogs";
import RecentBlogCard from "../Home/Home/RecentBlogCard";
import { Label, Select } from "flowbite-react";

const AllBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { data, isLoading, isFetching, refetch } =
    useAllBlogs(selectedCategory);

  console.log("selected category", selectedCategory);
  console.log(`http://localhost:5000/allblogs/${selectedCategory}`);

  //   get blogs data and set on state
  //   console.log(allBlogs);
  //   useEffect(() => {
  //     if (data) {
  //       setAllBlogs(data);
  //     }
  //   }, [data]);

  //   filter onclick
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    setSelectedCategory(filterValue);
    console.log("handle filter clicked", filterValue);
  };

  useEffect(() => {
    refetch();
  }, [selectedCategory]);

  if (isLoading) {
    return (
      <h2 className="text-5xl font-bold text-red-600 text-center my-20">
        Loading
      </h2>
    );
  }
  //   if (isFetching) {
  //     return (
  //       <h2 className="text-5xl font-bold text-red-600 text-center my-20">
  //         Loading
  //       </h2>
  //     );
  //   }
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      <h2 className="text-2xl md:text-5xl font-bold text-center my-10">
        All Blogs : {data?.length}
      </h2>
      {!data.length && (
        <h2 className="text-4xl font-bold text-center my-20">No Data Found</h2>
      )}
      {/* search implement */}
      {/* filter */}
      <div className="w-40 my-10">
        <div className="mb-2 block">
          <Label htmlFor="category" value="Select Blog Category" />
        </div>
        <Select
          onChange={handleFilter}
          name="category"
          id="category"
          type="text"
          required
        >
          <option value="all">All</option>
          <option value="technology">Technology</option>
          <option value="entertainment">Entertainment</option>
          <option value="education">Education</option>
        </Select>
      </div>
      {/* filter end */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.map((blog) => (
          <RecentBlogCard key={blog._id} blog={blog}></RecentBlogCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
