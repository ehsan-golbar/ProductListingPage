// import { useEffect, useState } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import star from "../../assets/icons8-star-48.png";
import { Stack } from "react-bootstrap";

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
    <Card style={{ width: "18rem", height: "40rem", borderRadius: "10px" }}>
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
        <Card.Text style={{ color: "#1ABA1A" }}>
          ${props.product && props.product.price}{" "}
        </Card.Text>
        <Button variant="primary">more</Button>
        <Stack
          direction="horizontal"
          className="d-flex justify-content-center align-items-center mt-2"
          gap={2}
        >
          <Card.Img
            // variant="top"
            src={star}
            style={{
              width: "30px",
              height: "40px",
              // paddingRight: "1rem",
              objectFit: "contain",
            }}

            // loading="lazy"
          />

          <Card.Text>
            {props.product && `${props.product.rating.rate} / 5`}
          </Card.Text>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
