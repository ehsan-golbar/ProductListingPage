// import { useEffect, useState } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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

interface MyComponentProps {
  product: Product;
}
function ProductCard(props: MyComponentProps) {
  return (
    <Card style={{ width: "18rem", height: "40rem" }}>
      <Card.Img
        variant="top"
        src={props.product?.image}
        style={{
          width: "300px",
          height: "400px",
          padding: "2rem",
          objectFit: "contain",
        }}

        loading="lazy"
      />
      <Card.Body className="d-flex flex-column align-items-center text-center mb-4">
        <Card.Title>{props.product && props.product.title}</Card.Title>
        <Card.Text>${props.product && props.product.price}</Card.Text>
        <Button variant="primary">more</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
