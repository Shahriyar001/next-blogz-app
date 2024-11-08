"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/types";
import React from "react";

const BlogsPage = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();

  const { data: blogs, isLoading, isError, error } = useGetBlogsQuery("");

  return (
    <div className="w-[90%] mx-auto my-5">
      <h1 className="text-4xl text-center my-5">
        All blogs from <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, ut.
          Minus minima asperiores facere, unde amet excepturi tenetur alias{" "}
        </i>
      </p>
      <div className="grid grid-cols-3 gap-4">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
