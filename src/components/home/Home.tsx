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


  const minPriceRange = useSelector(
    (state: RootState) => state.price.minPriceRange  );

    const maxPriceRange = useSelector(
      (state: RootState) => state.price.maxPriceRange  );

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

    let filteredProduct: Product[] | null = null;
    if (selectedCategories.length === 0) {
      setFilteredProducts(null);
    } else {
       filteredProduct= (products ?? []).filter(
        (prod) => {
          return selectedCategories.includes(prod.category);
        }
      );

      
    }


    if (minPriceRange === 0 && maxPriceRange === 100){
      setFilteredProducts(null);
    }else{
      if (filteredProduct === null ){
        filteredProduct= (products ?? []).filter(
          (prod) => {
            return prod.price <= maxPriceRange && prod.price >= minPriceRange;
          })
      }else{
        filteredProduct= (filteredProduct ?? []).filter(
          (prod) => {
            return  prod.price <= maxPriceRange && prod.price >= minPriceRange;
          })
      }
    }

    setFilteredProducts(filteredProduct);
  }, [selectedCategories, minPriceRange, maxPriceRange]);

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
            productChunks.map((chunk) => {
              return (
                <Row
                  key={chunk[0].id}
                  className="d-flex justify-content-center align-items-start  mb-4"
                >
                  {chunk.map((prod) => {
                    return (
                      <Col key={prod.id}>
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
