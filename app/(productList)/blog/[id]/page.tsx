export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    title: {
      absolute: data.title,
    },
  };
}

const BlogDetails = async ({ params }: { params: { id: string[] } }) => {
  const { id } = await params;

  return <div className="pt-24">BlogDetails | {id}</div>;
};
export default BlogDetails;
