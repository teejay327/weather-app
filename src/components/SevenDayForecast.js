import './SevenDayForecast.css';
import wind from '../assets/Wind.png';
import rain from '../assets/rainy-outline.svg';

function SevenDayForecast() {
  return (
    <div className='sevendayforecast'>
      <div className='sevendayforecast__box'>
       <ul>
        <li>
          <div className='sevendayforecast__icon'>
            <img src={ rain } alt="Rain"/>
          </div>
          <p>day1</p>
        </li>
        <li>
          <p>day2</p>
        </li>
        <li>
          <p>day3</p>
        </li>
        <li>
          <p>day4</p>
        </li>
        <li>
          <p>day5</p>
        </li>
        <li>
          <p>day6</p>
        </li>
        <li>
          <p>day7</p>
        </li>
       </ul>
      </div>
    </div>
  )
}

export default SevenDayForecast;