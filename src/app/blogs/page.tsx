import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/type";

const AllBlogs = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();
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
        {blogs.map((blog: Blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
