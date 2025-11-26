import Image from "next/image";
const HomePage = async () => {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/products");
  const data = await res.json();
  console.log("====================================");
  console.log(data.data);
  console.log("====================================");
  return (
    <div className="pt-24">
      {data.data.map((product: { id: number; imageCover: string }) => (
        <Image
          key={product.id}
          src={product.imageCover}
          alt={product.id.toString()}
          width={200}
          height={200}
        />
      ))}
    </div>
  );
};
export default HomePage;
