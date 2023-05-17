import './App.css';
import NavigationBar from './components/NavigationBar';
import CardList from './components/CardList';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const cardInfo = [
  {title: "one", text: "1", image: "https://cdn.27.ua/799/f5/6a/914794_2.jpeg"},
  {title: "two", text: "2", image: "https://content.rozetka.com.ua/goods/images/big/66421109.jpg"},
  {title: "three", text: "3", image: "https://family.ua/assets/cache/images/1000/images/catalog/50675/0972031001676644254.jpg"}
];

function App() {
  return (
    <Container fluid>
      <Row>
        <Col><NavigationBar/></Col>
      </Row> 
      <CardList data={cardInfo}/>    
    </Container>
  );
}

export default App;