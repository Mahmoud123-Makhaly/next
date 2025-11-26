import Link from "next/link";
export const metadata = {
  title: "Blog",
};
const Blog = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div className="pt-24">
      {data.map((post: { id: number; title: string; body: string }) => (
        <Link
          href={`/blog/${post.id}`}
          key={post.id}
          className="bg-red-500 block mb-4 w-[500px] p-4  rounded text-white"
        >
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </Link>
      ))}
    </div>
  );
};
export default Blog;
