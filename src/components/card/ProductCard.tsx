import { useEffect, useState } from 'react';
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


function ProductCard() {


  const [data, setData ]  = useState<Product | null>(null)

useEffect( () =>{
  const fetchItem = async () => {
    const res =  await  fetch('https://fakestoreapi.com/products/1')
     const  data : Product = await res.json()
     console.log (data)
     setData(data)
   } 


   fetchItem()
}, [])
  // const fetchItem = async () => {
  //   const res =  await  fetch('https://fakestoreapi.com/products/1')
  //    const  data : Product = await res.json()
  //    console.log (data)
  //    setData(data)
  //  } 


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data?.image} />
      <Card.Body>
        <Card.Title>{data && data.title}</Card.Title>
        <Card.Text>
{data && data.description}
        </Card.Text>
        <Button variant="primary" >more</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;