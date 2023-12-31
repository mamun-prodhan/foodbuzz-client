import { useEffect, useState } from "react";
import useFeaturedBlogs from "../../hooks/useFeaturedBlogs";
import DataTable from "react-data-table-component";
import { Spinner } from "flowbite-react";

const FeaturedBlogs = () => {
  const [topBlogs, setTopBlogs] = useState([]);
  const { data: blogData, isLoading } = useFeaturedBlogs();
  // console.log(topBlogs);
  //   react-data-table
  const columns = [
    {
      name: "Serial No",
      cell: (row, index) => index + 1,
    },
    {
      name: "Blog Title",
      cell: (row) => row.title,
    },
    {
      name: "Blog Writer",
      cell: (row) => row.ownerName,
    },
    {
      name: "Writer Image",
      cell: (row) => (
        <img className="h-10 w-10 rounded-full" src={row.ownerImage}></img>
      ),
    },
  ];

  useEffect(() => {
    if (blogData) {
      // Calculate word counts and sort the blogs
      const sortedBlogs = blogData
        .map((blog) => ({
          ...blog,
          wordCount: blog?.longDescription?.split(/\s+/).length || 0, // Set wordCount to 0 if longDescription is undefined
        }))
        .sort((a, b) => b.wordCount - a.wordCount);

      // Select the top 10 blogs
      const top10Blogs = sortedBlogs.slice(0, 10);

      setTopBlogs(top10Blogs);
    }
  }, [blogData]);

  if (isLoading) {
    return (
      <div className="text-center my-20">
        <Spinner aria-label="Center-aligned Extra large spinner example" />
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-0 mb-10">
      <h2 className="text-2xl md:text-5xl font-bold text-center my-5 md:my-10">
        Featured Blogs
      </h2>
      <DataTable columns={columns} data={topBlogs}></DataTable>
    </div>
  );
};

export default FeaturedBlogs;
