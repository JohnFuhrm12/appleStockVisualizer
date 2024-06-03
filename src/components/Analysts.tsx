import localFinancials from '../dev/localFinancials.json';
import '../styles/financials.css';

function Analysts( {...props} ) {
  const financials = props.financials || localFinancials; // In case the Docker container is not running, display a local version
  const analysts = financials.analyst_estimates;

  return (
    <div className='tableContainer'>
      <h2>Analysts</h2>
      {financials ? 
        <table className='financialTable'>
          <thead>
            <tr>
              <th>Citibank</th>
              <th>Goldman Sachs</th>
              <th>Morgan Stanley</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{analysts.Citibank}</td>
                <td>{analysts['Goldman Sachs']}</td>
                <td>{analysts['Morgan Stanley']}</td>
              </tr>
          </tbody>
        </table>
      : <></>}
    </div>
  )
}

export default Analysts;
