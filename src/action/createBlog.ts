"use server";

import { Blog } from "@/type";

export const createBlog = async (data: Blog) => {
  const res = await fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const blogInfo = await res.json();

  return blogInfo;
};
