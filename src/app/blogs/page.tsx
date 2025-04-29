"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/type";

const AllBlogs = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();
  const { data: blogs, isLoading, isError, error } = useGetBlogsQuery("");
  console.log(blogs);

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-center text-4xl my-5">All Blogs Service </h1>
      <p className="text-center w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-4 my-6">
        {blogs?.map((blog: Blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
