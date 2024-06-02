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

  function extractStockData(data:any) {
    const extractedData:any = [];

    // Extract neeeded values for chart from res data
    if (data['Time Series (5min)']) {
      Object.entries(
        data['Time Series (5min)']
      ).map(([key, value]) => {
        extractedData.push({
          x: key,
          y: [
            value['1. open'],
            value['2. high'],
            value['3. low'],
            value['4. close']
          ]
        })
      })
    }

    setStockData(extractedData);
  }

  const getStockData = async (ticker:string) => {
    // Demo data - change api key to env and change IBM to AAPL (ticker)
    await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`).then((res) => {
      const vantageData = res.data;
      extractStockData(vantageData);
    })
  }

  const getFinancials = async () => {
    // Docker Container - Flask API
    await axios.get('http://127.0.0.1:8000/financials').then((res) => {
      const localFinancials = res.data;
      setAnalysts(localFinancials);
      setRatios(localFinancials);
      console.log(res)
    });

  }

  useEffect(() => {
    getStockData('AAPL');
    //getFinancials();
  }, [])

  const props = {
    stockData,
    ratios, 
    analysts
  }

  return (
    <div id='home'>
      <Navbar/>
      <CandlestickChart {...props}/>
      <Ratios {...props}/>
      <Analysts {...props}/>
    </div>
  )
}

export default App;
