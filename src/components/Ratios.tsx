import localFinancials from '../dev/localFinancials.json';
import '../styles/financials.css';

function Ratios( {...props} ) {
  const financials = props.financials || localFinancials; // In case the Docker container is not running, display a local version
  console.log(financials)

  return (
    <nav className='tableContainer'>
      <h2>Ratios</h2>
      {financials ? 
        <table className='financialTable'>
          <thead>
            <tr>
              <th>Market Cap</th>
              <th>Current Ratio</th>
              <th>Shs Outstand</th>
              <th>P/E</th>
              <th>PEG</th>
              <th>P/S</th>
              <th>P/B</th>
              <th>D/E</th>
              <th>EPS</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{financials.market_ap}</td>
                <td>{financials.current_ratio}</td>
                <td>{financials.shares_outstanding}</td>
                <td>{financials.pe_ratio}</td>
                <td>{financials.peg_ratio}</td>
                <td>{financials.ps_ratio}</td>
                <td>{financials.pb_ratio}</td>
                <td>{financials.debt_to_equity_ratio}</td>
                <td>{financials.eps}</td>
              </tr>
          </tbody>
        </table>
      : <></>}
    </nav>
  )
}

export default Ratios;