import { useEffect, useState } from "react";
import useAllBlogs from "../../hooks/useAllBlogs";
import RecentBlogCard from "../Home/Home/RecentBlogCard";
import { Button, Label, Select, Spinner, TextInput } from "flowbite-react";

const AllBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data, isLoading, isFetching, refetch } =
    useAllBlogs(selectedCategory);
  const [loadedData, setLoadedData] = useState(data);
  // console.log("loaded data", loadedData);

  // console.log("selected category", selectedCategory);
  console.log(
    `https://assignment-11-server-weld-eta.vercel.app/allblogs/${selectedCategory}`
  );

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
    // console.log("handle filter clicked", filterValue);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchedValue = e.target.search.value;
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchedValue.toLowerCase())
    );
    setLoadedData(filteredData);
    // console.log("filtered data", filteredData);
    e.target.reset();
  };

  useEffect(() => {
    refetch();
    setLoadedData(data);
  }, [selectedCategory, data]);

  if (isLoading) {
    return (
      <div className="text-center my-20">
        <Spinner aria-label="Center-aligned Extra large spinner example" />
      </div>
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

      {/* search implement */}
      <div className="md:max-w-sm mx-auto mt-10">
        <form onSubmit={handleSearch}>
          <TextInput
            id="text"
            type="text"
            name="search"
            placeholder="Search by title"
            required
          />
          <Button className="mx-auto mt-5" type="submit">
            Search
          </Button>
        </form>
      </div>
      {!loadedData?.length && (
        <h2 className="text-4xl font-bold text-center my-20">No Data Found</h2>
      )}
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
          <option value="soup">Soup</option>
          <option value="salad">Salad</option>
          <option value="healthy">Healthy</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="dinner">Dinner</option>
        </Select>
      </div>
      {/* filter end */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {loadedData?.map((blog) => (
          <RecentBlogCard key={blog._id} blog={blog}></RecentBlogCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
