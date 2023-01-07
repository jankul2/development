import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './home';
import Login from './login';
import { useState } from 'react';
import Memo from './Memo';
function ContainerExample() {
    console.log('render Comntainer component')
    const [counter,setCounter]=useState('Hello');
    const [auth,setAuth]=useState(1);
    const handileEvent=(e)=>{
        setCounter(e.target.value);
        //setAuth(2);
    }

  return (
    <Container>
      <Row>
        <Col>
        <div><input type="text" value={counter} onChange={handileEvent}></input></div>
        <Home>
            <Memo></Memo>
            <Login className="ankul" login={auth}></Login>
        </Home>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;