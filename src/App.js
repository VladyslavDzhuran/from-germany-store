import './App.css';
import NavigationBar from './components/NavigationBar';
import CardItem from './components/CardItem'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col><NavigationBar/></Col>
      </Row> 
      <CardItem/>    
    </Container>
  );
}

export default App;