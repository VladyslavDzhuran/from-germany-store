import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

    
/* function CardItem (cardInfo) {
    return(
        <Container>
            <Row>
                {cardInfo.map((item, index) => (
                    <Col key={index} xs={12} md={4} lg={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image}/>
                            <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
} */

const CardItem = ({title, text, image}) => {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    )
}

export default CardItem;