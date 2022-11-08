import { useState } from 'react'
import './App.css'
import Chart from './components/Chart'
import usePredict from './hooks/usePredict'

function App() {
  const [symbol, setSymbol] = useState("MSFT")
  const { prediction, error } = usePredict(symbol)

  if(error) console.log(error);

  return (
    <div className="App">
      <label htmlFor="company">Company: </label>
      <select onChange={(e) => setSymbol(e.target.value)}>
        <option selected value="MSFT">Microsoft</option>
        <option value="GOOGL">Google</option>
        <option value="AAPL">Apple</option>
        <option value="META">Meta</option>
      </select>
      {prediction ? <Chart points={prediction} />: (!error && "Loading...")}
    </div>
  )
}

export default App
