import '../styles/ratios.css';

function Ratios( {...props} ) {
  const ratios = props.ratios;
  console.log(ratios)

  return (
    <nav id='ratios'>
      <h2>Ratios</h2>
    </nav>
  )
}

export default Ratios;