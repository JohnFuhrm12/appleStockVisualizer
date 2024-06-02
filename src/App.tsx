import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CandlestickChart from './components/CandlestickChart';
import Analysts from './components/Analysts';
import Ratios from './components/Ratios';
import axios from 'axios';
import './App.css';

function App() {
  const [stockData, setStockData] = useState();
  const [analysts, setAnalysts] = useState();
  const [ratios, setRatios] = useState();

  const alphaVantageKey = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY; // .env file public for demo use

  const getStockData = async (ticker:string) => {
    axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=${alphaVantageKey}`).then((res) => {
      console.log(res)
    })
  }

  const getFinancials = async () => {
    // Docker Container - Flask API
    axios.get('http://127.0.0.1:8000/financials').then((res) => {
      const localFinancials = res.data;
      setAnalysts(localFinancials);
      setRatios(localFinancials);
      console.log(res)
    });

  }

  useEffect(() => {
    getStockData('AAPL');
    getFinancials();
  }, [])

  const props = {
    stockData,
    ratios, 
    analysts
  }

  return (
    <div id='home'>
      <Navbar/>
      <CandlestickChart/>
      <Ratios {...props}/>
      <Analysts {...props}/>
    </div>
  )
}

export default App;
