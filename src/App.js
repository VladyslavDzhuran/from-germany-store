import './App.css';
import NavigationBar from './components/NavigationBar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container fluid>
      <Row>
        <NavigationBar/>
      </Row>     
    </Container>
  );
}

export default App;