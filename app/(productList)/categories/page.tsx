const Categories = async () => {
  const res = await fetch("http://localhost:4000/category");
  const data = await res.json();

  return (
    <>
      <h1 className="pt-24"> Categories </h1>
      {data.map((product: { id: number; title: string; price: number }) => (
        <div
          key={product.id}
          className="bg-red-500 mb-4 w-[500px] p-4 rounded text-white"
        >
          <h1>{product.title}</h1>
        </div>
      ))}
    </>
  );
};
export default Categories;
