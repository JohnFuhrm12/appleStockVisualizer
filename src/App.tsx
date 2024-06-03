import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CandlestickChart from './components/CandlestickChart';
import Analysts from './components/Analysts';
import Ratios from './components/Ratios';
import axios from 'axios';
import './styles/app.css';

function App() {
  const [stockData, setStockData] = useState<StockDataPoint[]>();
  const [financials, setFinancials] = useState<FinancialData>();

  // const alphaVantageKey = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY; // .env file public for demo use

  // Expected JSON Structure
  interface StockDataPoint {
    x: string;
    y: [string, string, string, string];
  }
  
  interface TimeSeriesData {
    [timestamp: string]: {
      "1. open": string;
      "2. high": string;
      "3. low": string;
      "4. close": string;
    };
  }
  
  interface StockData {
    "Time Series (5min)": TimeSeriesData;
  }

  interface FinancialData {
    analyst_estimates: object;
    current_ratio: number;
    debt_to_equity_ratio: number;
    eps: number;
    market_ap: number;
    news: object;
    pb_ratio: number;
    pe_ratio: number;
    peg_ratio: number;
    ps_ratio: number;
    shares_outstanding: number;
    ticker: string;
  }

  function extractStockData(data:StockData) {
    const extractedData:StockDataPoint[] = [];

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
    }).catch(error => {
      console.error(error);
      // console.log(ticker) // For GH Deploy 
    });
  }

  const getFinancials = async () => {
    // Docker Container - Flask API
    await axios.get('/financials').then((res) => {
      const localFinancials = res.data;
      setFinancials(localFinancials);
    }).catch(error => {
      console.error(error);
    });
  }

  useEffect(() => {
    getStockData('AAPL');
    getFinancials();
  }, [])

  const props = {
    stockData,
    financials
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
