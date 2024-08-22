import { Col, Container, Pagination, Row, Stack } from "react-bootstrap";
import ProductCard from "../card/ProductCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";

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

  const [products, setProducts] = useState<Product[] | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(
    null
  );

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=20");

      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.statusText}`);
      }

      const data: Product[] = await res.json();
      setProducts(data);
      console.log(products);
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
    if (selectedCategories.length === 0) {
      setFilteredProducts(null);
    } else {
      const filteredProduct: Product[] | null = (products ?? []).filter(
        (prod) => {
          return selectedCategories.includes(prod.category);
        }
      );

      setFilteredProducts(filteredProduct);
    }
  }, [selectedCategories]);

  const totalPages =
    filteredProducts !== null
      ? Math.ceil(filteredProducts.length / 6)
      : products && Math.ceil(products.length / 6);

  // Get the items to display on the current page
  const startIndex = (currentPage - 1) * 6;
  const currentItems =
    filteredProducts !== null
      ? filteredProducts?.slice(startIndex, startIndex + 6)
      : products?.slice(startIndex, startIndex + 6);

  const productChunks = chunkArray(currentItems ?? [], 3); // Create chunks of 3 products

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
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <Stack className="mt-4">
        {/* <Stack
        direction="horizontal"
        gap={3}
        className="d-flex justify-content-center align-items-start"
      >
        {products &&
          products.map((prod, index) => {
            return <ProductCard key={index} product={prod}></ProductCard>;
          })}
      </Stack> */}

        <Container>
          {productChunks &&
            productChunks.map((chunk, rowIndex) => {
              return (
                <Row
                  key={rowIndex}
                  className="d-flex justify-content-center align-items-start  mb-4"
                >
                  {chunk.map((prod, colIndex) => {
                    return (
                      <Col key={colIndex}>
                        <ProductCard product={prod}></ProductCard>
                      </Col>
                    );
                  })}
                </Row>
              );
            })}
        </Container>

        <Pagination className=" mb-3 d-flex justify-content-center">
          {items}
        </Pagination>
      </Stack>
    </>
  );
}

export default Home;
