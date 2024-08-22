import { Col, Container, Pagination, Row, Stack } from "react-bootstrap";
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

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=6");

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

  const productChunks = chunkArray(products, 3); // Create chunks of 3 products



  const handlePageChange = (num : number) =>{
        setCurrentPage(num)
  }
  let active = currentPage;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => handlePageChange(number)}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>

    <Stack>
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
                className="flex justify-content-center align-items-start  mb-4"
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



      <Pagination>{items}</Pagination>

      </Stack>
    </>
  );
}

export default Home;
