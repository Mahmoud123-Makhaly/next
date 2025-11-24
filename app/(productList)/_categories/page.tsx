"use client";
import { useRouter } from "next/navigation";

const Categories = () => {
  const router = useRouter();
  return (
    <>
      <h1 className="pt-24"> Categories </h1>
      <button
        className="px-3 py-3 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={() => router.replace("/products")}
      >
        Go To Products Page
      </button>
    </>
  );
};
export default Categories;
