import './Statistics.css';

function Statistics (props) {
  return (
    <div className='statistics'>
      <h3>Chance of rain</h3>
      <h3>{ props.chance }</h3>
      <h3>Rainfall</h3>
      <h3>{ props.amount }</h3>
      <h3>UV Index</h3>
      <h3>{ props.uv }</h3>
      <h3>Wind</h3>
      <h3>{ props.wind }</h3>
    </div>
  )
}

export default Statistics;