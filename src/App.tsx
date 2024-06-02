import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Analysts from './components/Analysts';
import Ratios from './components/Ratios';
import axios from 'axios';
import './App.css';

function App() {
  const [analysts, setAnalysts] = useState();
  const [ratios, setRatios] = useState();

  const getFinancials = async () => {
    // Docker Container - Flask API
    axios.get('http://127.0.0.1:8000/financials').then((res) => {
      const localFinancials = res.data;
      console.log(res)
    });

  }

  useEffect(() => {
    getFinancials();
  }, [])

  const props = {
    ratios, 
    analysts
  }

  return (
    <div id='home'>
      <Navbar/>
      <Ratios {...props}/>
      <Analysts {...props}/>
    </div>
  )
}

export default App;
