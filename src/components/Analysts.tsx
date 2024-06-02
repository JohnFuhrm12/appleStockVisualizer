import '../styles/analysts.css';

function Analysts( {...props} ) {
  const analysts = props.analysts;
  console.log(analysts)

  return (
    <nav id='analysts'>
      <h2>Analysts</h2>
    </nav>
  )
}

export default Analysts;
