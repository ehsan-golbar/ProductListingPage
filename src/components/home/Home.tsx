import React, { useEffect, useState, Suspense, startTransition } from "react";
import { Col, Container, Pagination, Row, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";

// Lazy load the ProductCard component
const ProductCard = React.lazy(() => import("../card/ProductCard"));

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
  const selectedCategories = useSelector(
    (state: RootState) => state.categories.selectedCategories
  );
  const ascPrice = useSelector((state: RootState) => state.sort.ascPrice);
  const bestRate = useSelector((state: RootState) => state.sort.bestRate);
  const minPriceRange = useSelector(
    (state: RootState) => state.price.minPriceRange
  );
  const maxPriceRange = useSelector(
    (state: RootState) => state.price.maxPriceRange
  );

  const [products, setProducts] = useState<Product[] | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");

      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.statusText}`);
      }

      const data: Product[] = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const chunkArray = (arr: Product[] | null, chunkSize: number) => {
    if (arr !== null) {
      const result = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
      }
      return result;
    }
    return null;
  };

  useEffect(() => {
    startTransition(() => {
      let filteredProduct: Product[] | null = null;
      if (selectedCategories.length === 0) {
        setFilteredProducts(null);
      } else {
        filteredProduct = (products ?? []).filter((prod) => {
          return selectedCategories.includes(prod.category);
        });
      }

      if (minPriceRange === 0 && maxPriceRange === 100) {
        setFilteredProducts(null);
      } else {
        if (filteredProduct === null) {
          filteredProduct = (products ?? []).filter((prod) => {
            return prod.price <= maxPriceRange && prod.price >= minPriceRange;
          });
        } else {
          filteredProduct = (filteredProduct ?? []).filter((prod) => {
            return prod.price <= maxPriceRange && prod.price >= minPriceRange;
          });
        }
      }

      let sortedProduct: Product[] | null = null;

      if (bestRate) {
        if (filteredProduct !== null) {
          sortedProduct = [...filteredProduct].sort(
            (a, b) => b.rating.rate - a.rating.rate
          );
        } else {
          if (products !== null) {
            sortedProduct = [...products].sort(
              (a, b) => b.rating.rate - a.rating.rate
            );
          }
        }
      } else {
        if (filteredProduct !== null) {
          sortedProduct = ascPrice
            ? [...filteredProduct].sort((a, b) => a.price - b.price)
            : [...filteredProduct].sort((a, b) => b.price - a.price);
        } else {
          if (products !== null) {
            sortedProduct = ascPrice
              ? [...products].sort((a, b) => a.price - b.price)
              : [...products].sort((a, b) => b.price - a.price);
          }
        }
      }

      if (sortedProduct === null) {
        setFilteredProducts(filteredProduct);
      } else setFilteredProducts(sortedProduct);
    });
  }, [
    selectedCategories,
    minPriceRange,
    maxPriceRange,
    ascPrice,
    bestRate,
    products,
  ]);

  const totalPages =
    filteredProducts !== null
      ? Math.ceil(filteredProducts.length / 6)
      : products && Math.ceil(products.length / 6);

  const startIndex = (currentPage - 1) * 6;
  const currentItems =
    filteredProducts !== null
      ? filteredProducts?.slice(startIndex, startIndex + 6)
      : products?.slice(startIndex, startIndex + 6);

  const productChunks = chunkArray(currentItems ?? [], 3);

  const handlePageChange = (num: number) => {
    setCurrentPage(num);
  };

  let active = currentPage;
  let items = [];
  for (let number = 1; number <= (totalPages ? totalPages : 1); number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handlePageChange(number)}
        // style={{color:'#000000'}}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <Stack style={{ marginTop: "13rem" }}>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            {productChunks &&
              productChunks.map((chunk) => (
                <Row
                  key={chunk[0].id}
                  className="d-flex justify-content-center align-items-start  mb-4"
                  lg={3}
                >
                  {chunk.map((prod) => (
                    <Col key={prod.id}>
                      <ProductCard product={prod} />
                    </Col>
                  ))}
                </Row>
              ))}
          </Suspense>
        </Container>

        <Pagination className="mb-3 d-flex justify-content-center ">
          {items}
        </Pagination>
      </Stack>
    </>
  );
}

export default Home;
