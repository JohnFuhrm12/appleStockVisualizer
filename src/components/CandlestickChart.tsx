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
            text: "AAPL Apple Inc",
            align: "left",
            style: {
                fontSize: '24px', 
                color: 'rgb(235, 235, 235)'
            }
        },
        xaxis: {
            type: "datetime",
            tooltip: {
                enabled: true,
            },
            labels: {
                style: {
                    colors: 'white'
                }
            }
        },
        yaxis: {
            tooltip: {
                enabled: true,
            },
            labels: {
                style: {
                    colors: 'white'
                }
            }
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: 'rgb(0, 200, 0)',
                    downward: 'rgb(200, 0, 0)'
                },
                wick: {
                    useFillColor: true,
                }
            }
        },
        grid: {
            row: {
              colors: ['rgb(46, 53, 65)']
            },
            column: {
              colors: ['rgb(46, 53, 65)']
            }
        },
    };
    
  return (
    <div id='candlestick'>
        {stockData ? 
         <ReactApexChart
            series={[{data: props.stockData}]}
            options={candleStickOptions}
            type='candlestick'
            height={650}
        />
        : <></>}
    </div>
  )
}

export default CandlestickChart;