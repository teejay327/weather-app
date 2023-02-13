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
            <img src={wind} alt='wind'/>
          </div>

            <div className='sevendayforecast__date' >Tuesday 14 February</div>
            <div className='sevendayforecast__mintemp' >21&#8451;</div>
            <div className='sevendayforecast__maxtemp' >32&#8451;</div>
            <div className='sevendayforecast__rainchance' >30%</div>
            <div className='sevendayforecast__rainamount' >1-5mm</div>
        </li>

        <li>
          <div>
            <img src={wind} alt='wind'/>
          </div>
            <div className='sevendayforecast__date' >Wednesday 15 February</div>
            <div className='sevendayforecast__mintemp' >20&#8451;</div>
            <div className='sevendayforecast__maxtemp' >31&#8451;</div>
            <div className='sevendayforecast__rainchance' >40%</div>
            <div className='sevendayforecast__rainamount' >1-5mm</div>
        </li>

        <li>
          <div>
            <img src={wind} alt='wind'/>
          </div>
            <div className='sevendayforecast__date' >Thursday 16 February</div>
            <div className='sevendayforecast__mintemp' >22&#8451;</div>
            <div className='sevendayforecast__maxtemp' >30&#8451;</div>
            <div className='sevendayforecast__rainchance' >40%</div>
            <div className='sevendayforecast__rainamount' >1-5mm</div>
        </li>

        <li>
          <div>
            <img src={wind} alt='wind'/>
          </div>
            <div className='sevendayforecast__date' >Friday 17 February</div>
            <div className='sevendayforecast__mintemp' >19&#8451;</div>
            <div className='sevendayforecast__maxtemp' >28&#8451;</div>
            <div className='sevendayforecast__rainchance' >20%</div>
            <div className='sevendayforecast__rainamount' >1mm</div>
        </li>
       </ul>
      </div>
    </div>
  )
}

export default SevenDayForecast;