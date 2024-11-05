import BlogDetails from "@/components/ui/BlogDetails";
import { Blog } from "@/types";

interface BlogId {
  params: {
    blogid: string;
  };
}

const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: Blog) => ({
    blogid: blog.id,
  }));
};

const BlogDetailPage = async ({ params }: BlogId) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogid}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  console.log(blog);

  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailPage;
