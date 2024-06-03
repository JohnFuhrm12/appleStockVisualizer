import ReactApexChart from 'react-apexcharts';
import '../styles/candlestick.css';
import { useEffect, useState } from 'react';

function CandlestickChart( {...props} ) {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const stockData = props.stockData;

    useEffect(() => {
        const handleResize = () => {
        setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        console.log(windowSize);
    })

    const candleStickOptions:any = {
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
            series={[{data: stockData}]}
            options={candleStickOptions}
            type='candlestick'
            height={windowSize > 750 ? 650 : 350}
        />
        : <></>}
    </div>
  )
}

export default CandlestickChart;