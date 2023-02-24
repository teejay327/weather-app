import './CurrentStats.css';

function CurrentStats(props) {
  return (
    <div className='current-stats'>
       <div className='current-stats__temperatures'>
          <p>Currently</p>
          <div>{ props.temperature } &#8451;</div>
       </div>
       <div className='current-stats__humidity'>
          <p>Humidity</p>
          <div>{ props.humidity }</div>
       </div>
       <div className='current-stats__rainfall'>
          <p>Rain since 9am</p>
          <div>{ props.rainfall }</div>
       </div>
       <div className='current-stats__wind'>
          <p>Wind</p>
          <div>{ props.wind }</div>
       </div>
    </div>
  )
}

export default CurrentStats;