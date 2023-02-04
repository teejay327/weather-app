import './SevenDayForecast.css';

function SevenDayForecast(props) {
  return (
    <div className='sevendayforecast'>
      <div className='sevendayforecast__title'>
        <h4>7 day forecast for { props.location }</h4>
      </div>

      <div className='box'>
        
      </div>
    </div>
  )
}

export default SevenDayForecast;