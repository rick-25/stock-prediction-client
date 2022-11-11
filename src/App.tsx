import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from './components/Chart'
import usePredict from './hooks/usePredict'
import Nav from './components/Nav'
import Form from 'react-bootstrap/Form';
import StockChart from './components/StockChart';

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
          </Form.Select>
        </div>
        {prediction && (
          <>
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
            <StockChart
              points={prediction.filter(val => val.actual == null)}
              lines={[{
                dataKey: 'predicted',
                stroke: 'red',
                width: 2
              }]}
              tickSize={5}
            />
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
          </>
        )}
        {error && <p>Sorry! an error occured at server</p>}
        {(!prediction && !error) && <p>Predicting.....</p>}
      </main>
    </div>
  )
}

export default App
