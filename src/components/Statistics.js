import './Statistics.css';

function Statistics (props) {
  return (
    <div className='statistics'>
      <div className='box'>
        Chance of rain 
        { props.chance }
      </div>

      <div className='box'>
        Rainfall 
        { props.amount }
      </div>

      <div className='box'>
        UV Index 
        { props.uv }
      </div>

      <div className='box'>
        Wind 
        { props.wind }
      </div>

    </div>
  )
}

export default Statistics;