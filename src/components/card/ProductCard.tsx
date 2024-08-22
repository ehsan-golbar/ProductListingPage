// import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
  product : Product
}
function ProductCard(props : MyComponentProps) {


  // const [data, setData ]  = useState<Product | null>(null)

// useEffect( () =>{
//   const fetchItem = async () => {
//     const res =  await  fetch('https://fakestoreapi.com/products/1')
//      const  data : Product = await res.json()
//      console.log (data)
//      setData(data)
//    } 


//    fetchItem()
// }, [])
  // const fetchItem = async () => {
  //   const res =  await  fetch('https://fakestoreapi.com/products/1')
  //    const  data : Product = await res.json()
  //    console.log (data)
  //    setData(data)
  //  } 


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.product?.image} />
      <Card.Body>
        <Card.Title>{props.product && props.product.title}</Card.Title>
        <Card.Text>
{props.product && props.product.description}
        </Card.Text>
        <Button variant="primary" >more</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;