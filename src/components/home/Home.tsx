import { Stack } from "react-bootstrap";
import ProductCard from "../card/ProductCard";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function Home() {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=3");

      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.statusText}`);
      }

      const data: Product[] = await res.json();
      setProducts(data);
      console.log(products);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        {products &&
          products.map((prod, index) => {
            return (<ProductCard key={index} product={prod}></ProductCard>)
          })}
      </Stack>
    </>
  );
}

export default Home;
