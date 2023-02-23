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
       </div>
       <div className='current-stats__rainfall'>
         <p>Rain since 9am</p>
       </div>
       <div className='current-stats__wind'>
          <p>Wind</p>
       </div>
    </div>
  )
}

export default CurrentStats;