import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react'
import usePredict from './hooks/usePredict'
import Nav from './components/Nav'
import Form from 'react-bootstrap/Form';
import StockChart from './components/StockChart';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const [symbol, setSymbol] = useState("MSFT")
  const { prediction, error } = usePredict(symbol)

  if (error) console.log(error);

  return (
    <div className="App">
      <Nav />
      <main>
        <div style={{ padding: '50px', display: 'flex', justifyContent: 'center' }}>
          <Form.Select
            onChange={(e) => setSymbol(e.target.value)}
            style={{ width: '300px' }}
          >
            <option selected value="MSFT">Microsoft</option>
            <option value="GOOGL">Google</option>
            <option value="AAPL">Apple</option>
            <option value="META">Meta</option>
            <option value="SUZLON.NS">Suzlon</option>
          </Form.Select>
        </div>
        {prediction && (
          <Container fluid>
            <Row style={{ justifyContent: 'center', gap:'10px' }}>
              <Col md={5} xs={12}>
                <StockChart
                  points={prediction}
                  lines={[{
                    dataKey: 'actual',
                    stroke: 'black',
                    width: 2
                  }]}
                  tickSize={0}
                  xInterval={0}
                />
              </Col>
              <Col md={5} xs={12}>
                <StockChart
                  points={prediction.filter(val => val.actual == null)}
                  lines={[{
                    dataKey: 'predicted',
                    stroke: 'red',
                    width: 2
                  }]}
                  tickSize={5}
                />
              </Col>
              <Col md={5} xs={12}>
                <StockChart
                  points={prediction}
                  lines={[{
                    dataKey: 'predicted',
                    stroke: '#8884d8',
                    width: 3
                  }, {
                    dataKey: 'actual',
                    stroke: '#7fe04f',
                    width: 2
                  }]}
                  tickSize={0}
                  xInterval={0}
                />
              </Col>
            </Row>
          </Container>
        )}
        {error && <p>Sorry! an error occured at server</p>}
        {!prediction && !error && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button 
              disabled 
              style={{ backgroundColor: '#8884d8'}}
            >
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              {' '}
              Predicting...
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
