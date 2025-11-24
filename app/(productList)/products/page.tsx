"use client";

import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState<
    { id: number; title: string; price: number }[]
  >([]);
  useEffect(() => {
    const fetchAllProducts = async () => {
      const res = await fetch("http://localhost:4000/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchAllProducts();
  }, []);

  return (
    <main className="pt-32">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-red-500 mb-4 w-[500px] p-4 rounded text-white"
        >
          <h1>{product.title}</h1>
          <p>{product.price}</p>
        </div>
      ))}
    </main>
  );
};
export default Products;
