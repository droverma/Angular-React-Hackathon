import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Container, Navbar, } from 'react-bootstrap';
import lap from '../assets/download.jpeg';
import iphn from '../assets/iphone11-2019.webp';
import redmi from '../assets/mxw_640,f_auto.avif';
import book from '../assets/photo-1589998059171-988d887df646.jpeg';
import wbt from '../assets/earphone.jpg';
import wlbt from '../assets/wireless-earphn.webp';
import Timer from "../timer/Timer";
const product = [
  {
    productName: 'HP Laptop series 3000',
    img: lap,
    timer: {
      initialMinute: 15,
      initialSeconds: 12,
      expired: false
    }
  },
  {
    productName: 'Iphone 13 pro ',
    img: iphn,
    timer: {
      initialHours: 11,
      initialMinute: 9,
      initialSeconds: 2,
      expired: false
    }
  },
  {
    productName: 'Redmi Note 10',
    img: redmi,
    timer: {
      initialHours: 2,
      initialMinute: 2,
      initialSeconds: 30,
      expired: false
    }
  },
  {
    productName: 'Maths Book',
    img: book,
    timer: {
      initialHours: 0,
      initialMinute: 0,
      initialSeconds: 2,
      expired: false
    }
  },
  {
    productName: 'Redmi Wireless Earphone',
    img: wbt,
    timer: {
      initialHours: 5,
      initialMinute: 8,
      initialSeconds: 2,
      expired: false
    }
  },
  {
    productName: 'Realme Wired Earphone',
    img: wlbt,
    timer: {
      initialHours: 1,
      initialMinute: 8,
      initialSeconds: 2,
      expired: false
    }
  },
  {
    productName: 'Redmi 9',
    img: redmi,
    timer: {
      initialHours: 0,
      initialMinute: 0,
      initialSeconds: 2,
      expired: false
    }
  },
  {
    productName: 'Dell Laptop series 3000',
    img: lap,
    timer: {
      initialMinute: 15,
      initialSeconds: 12,
      expired: false
    }
  },
  {
    productName: 'Science Book',
    img: book,
    timer: {
      initialHours: 0,
      initialMinute: 0,
      initialSeconds: 2,
      expired: false
    }
  },
  {
    productName: 'Iphone 13',
    img: iphn,
    timer: {
      initialHours: 0,
      initialMinute: 10,
      initialSeconds: 0,
      expired: false
    }
  },
  {
    productName: 'Redmi Wireless Earphone',
    img: wbt,
    timer: {
      initialHours: 0,
      initialMinute: 2,
      initialSeconds: 2,
      expired: false
    }
  },
  {
    productName: 'Realme Wired Earphone',
    img: wlbt,
    timer: {
      initialHours: 0,
      initialMinute: 1,
      initialSeconds: 2,
      expired: false
    }
  }
]

const Product = () => {
  const [productList, setProductList] = useState(product);
  const [index, setIndex] = useState(null);

  const expiredTime = (expired, index) => {
    product[index].timer.expired = expired;
    setIndex(index)
    setProductList(product)
  }

  useEffect(() => {
    setProductList(productList)
  }, [productList, index])

  const addToCard = () => {
    alert('Product added into card')
  }
  return <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          Product List (CountDown)
        </Navbar.Brand>
      </Container>
    </Navbar>
    <Row xs={1} md={4} className="g-4 m-0">
      {productList.map((item, idx) => (
        <Col key={idx}>
          <Card style={{ width: '18rem' }}  >
            <Card.Img variant="top" src={item.img} style={{ width: '17.5rem', height: '10rem' }} />
            <Card.Body>
              <Card.Title>{item.productName}</Card.Title>
              <Card.Subtitle>In Stock</Card.Subtitle>
              <Card.Text>
                <Timer index={idx} expired={item.timer.expired} setExpired={expiredTime} initialHours={item.timer.initialHours} initialMinute={item.timer.initialMinute} initialSeconds={item.timer.initialSeconds} />
              </Card.Text>
              <Button variant="primary" onClick={addToCard} disabled={item.timer.expired === true}>Buy</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </>
}
export default Product;