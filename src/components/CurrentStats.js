import './CurrentStats.css';

function CurrentStats(props) {
  return (
    <div className='current-stats'>
       <div className='current-stats__temperatures'>
          <p>Currently</p>
          <h3>{ props.temperature } &#8451;</h3>
       </div>
       <div className='current-stats__humidity'>
          <p>Humidity</p>
          <h3>{ props.humidity }</h3>
       </div>
       <div className='current-stats__rainfall'>
          <p>Rain since 9am</p>
          <h3>{ props.rainfall }</h3>
       </div>
       <div className='current-stats__wind'>
          <p>Wind</p>
          <h3>{ props.wind }</h3>
       </div>
    </div>
  )
}

export default CurrentStats;