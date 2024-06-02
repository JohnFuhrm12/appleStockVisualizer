import ReactApexChart from 'react-apexcharts';
import '../styles/candlestick.css';

function CandlestickChart( {...props} ) {
    const stockData = props.stockData;
    console.log(props.stockData)

    const candleStickOptions = {
        chart: {
            type: "candlestick",
        },
        title: {
            text: "CandleStick Chart",
            align: "left",
        },
        xaxis: {
            type: "datetime",
        },
        yaxis: {
            tooltip: {
                enabled: true,
            },
        },
        plotOptions: {
            candlestick: {
            colors: {
                upward: 'green',
                downward: 'red'
            },
            wick: {
                useFillColor: true,
              }
            }
        }
    };
    
  return (
    <nav id='candlestick'>
        <h1>AAPL <span>Apple Inc</span></h1>
        <h2>Candlestick Chart</h2>
        {stockData ? 
         <ReactApexChart
            series={
                [
                    {
                        data: props.stockData
                    }
                ]
            }
            options={candleStickOptions}
            type='candlestick'
        />
        : <></>}
    </nav>
  )
}

export default CandlestickChart;