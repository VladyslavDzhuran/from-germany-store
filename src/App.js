import './App.css';
import NavigationBar from './components/NavigationBar';
import CardItem from './components/CardItem'
import Footer from './components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from './components/Navigation';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <CardItem/>
      <Footer/>
    </BrowserRouter>
  );

/*   return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col><Navigation/></Col>
        </Row> 
        <CardItem/>
      </Container>
    </BrowserRouter>
  ); */
}

export default App;