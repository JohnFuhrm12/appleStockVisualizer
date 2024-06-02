import '../styles/candlestick.css';

function CandlestickChart( {...props} ) {
    const ratios = props.ratios;
    console.log(ratios)

  return (
    <nav id='candlestick'>
      <h2>Candlestick Chart</h2>
    </nav>
  )
}

export default CandlestickChart;