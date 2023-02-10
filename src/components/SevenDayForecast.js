import './SevenDayForecast.css';
import wind from '../assets/Wind.png';
import rain from '../assets/rainy-outline.svg';

function SevenDayForecast() {
  return (
    <div className='sevendayforecast'>
      <div className='sevendayforecast__box'>
       <ul>
        <li>
          <div>
            <img src={wind} />
          </div>
          <p>day1</p>
          <p>day1</p>
          <p>day1</p>
          <p>day1</p>
          <p>day5</p>
         

        </li>
        <li>
          <p>day2</p>
        </li>

       </ul>
      </div>
    </div>
  )
}

export default SevenDayForecast;