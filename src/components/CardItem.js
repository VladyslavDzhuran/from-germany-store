import { React, useState } from "react";
import "../App.css"
import "./CardItemGroup.css"
import { Card, Container, Row, Col } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
    {title: "one", price: "500", image: "https://cdn.27.ua/799/f5/6a/914794_2.jpeg"},
    {title: "two", price: "450", image: "https://content.rozetka.com.ua/goods/images/big/66421109.jpg"},
    {title: "three", price: "550", image: "https://family.ua/assets/cache/images/1000/images/catalog/50675/0972031001676644254.jpg"},
    {title: "four", price: "500", image: "https://content.rozetka.com.ua/goods/images/big/66421109.jpg"},
    {title: "five", price: "450", image: "https://content.rozetka.com.ua/goods/images/big/66421109.jpg"},
    {title: "six", price: "550", image: "https://family.ua/assets/cache/images/1000/images/catalog/50675/0972031001676644254.jpg"},
    {title: "seven", price: "500", image: "https://cdn.27.ua/799/f5/6a/914794_2.jpeg"},
    {title: "eight", price: "450", image: "https://content.rozetka.com.ua/goods/images/big/66421109.jpg"},
    {title: "nine", price: "550", image: "https://family.ua/assets/cache/images/1000/images/catalog/50675/0972031001676644254.jpg"}
  ];
    
function CardItem () {

    const [cardInfo, setCardInfo] = useState(products);

    return(
        <Container>
            <Row xs={12} md={6} lg={4}>
                {cardInfo?.map((item, index) => (
                    <Col key={index} className="CardItemGroup">
                        <Card style={{ width: '18rem'}} bg="warning" text="dark" /* class="embed-responsive" */>
                            <Card.Img variant="top" src={item.image} className = "CardImage" /* class="card-img-top embed-responsive-item" *//>
                            <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{`${item.price}₴`}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CardItem;