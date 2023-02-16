import './SevenDayForecast.css';
import wind from '../assets/Wind.png';
import raining from '../assets/raining_32.png';
import cloudy from '../assets/cloudy_32.png';
import storms from '../assets/storms_32.png';
import sunny from '../assets/sunny_32.png';

function SevenDayForecast() {
  return (
    <div className='sevendayforecast'>
      <div className='sevendayforecast__box'>
       <ul>
        <li>
          <div className='sevendayforecast__img'>
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
            <img src={raining} alt='rain'/>
          </div>
            <div className='sevendayforecast__date' >Wednesday 15 February</div>
            <div className='sevendayforecast__mintemp' >20&#8451;</div>
            <div className='sevendayforecast__maxtemp' >31&#8451;</div>
            <div className='sevendayforecast__rainchance' >80%</div>
            <div className='sevendayforecast__rainamount' >5-10mm</div>
        </li>

        <li>
          <div>
            <img src={cloudy} alt='cloudy'/>
          </div>
            <div className='sevendayforecast__date' >Thursday 16 February</div>
            <div className='sevendayforecast__mintemp' >22&#8451;</div>
            <div className='sevendayforecast__maxtemp' >30&#8451;</div>
            <div className='sevendayforecast__rainchance' >30%</div>
            <div className='sevendayforecast__rainamount' >1-5mm</div>
        </li>

        <li>
          <div>
            <img src={sunny} alt='sunny'/>
          </div>
            <div className='sevendayforecast__date' >Friday 17 February</div>
            <div className='sevendayforecast__mintemp' >19&#8451;</div>
            <div className='sevendayforecast__maxtemp' >28&#8451;</div>
            <div className='sevendayforecast__rainchance' >5%</div>
            <div className='sevendayforecast__rainamount' >1mm</div>
        </li>

        <li>
          <div>
            <svg width="80px" height="60px" viewBox="0 0 60 60">
              <title>Clearing Shower</title>
              <g fill="none" fill-rule="evenodd">
              <path d="M39.4 10.23c-.65 0-1.17-.7-1.17-1.57V5.57c0-.88.53-1.57 1.17-1.57.64 0 1.17.7 1.17 1.57v3.08c0 .88-.53 1.57-1.17 1.57v.01zM39.4 38.26c-.65 0-1.17-.7-1.17-1.57V33.6c0-.88.53-1.57 1.17-1.57.64 0 1.17.7 1.17 1.57v3.08c0 .88-.53 1.57-1.17 1.57v.01z" fill="#FFB000">
              </path>
              <circle fill="#FFB000" fill-rule="nonzero" cx="39.4" cy="21.13" r="8.74"></circle><path d="M50.3 21.13c0-.65.7-1.17 1.57-1.17h3.08c.88 0 1.57.53 1.57 1.17 0 .64-.7 1.17-1.57 1.17h-3.08c-.88 0-1.57-.53-1.57-1.17zM22.27 21.13c0-.65.7-1.17 1.57-1.17h3.08c.88 0 1.57.53 1.57 1.17 0 .64-.7 1.17-1.57 1.17h-3.08c-.88 0-1.57-.53-1.57-1.17zM47.1 28.83a1.41 1.41 0 011.94.28l2.18 2.18a1.22 1.22 0 11-1.66 1.66l-2.18-2.18a1.41 1.41 0 01-.28-1.94zM27.28 9.01a1.41 1.41 0 011.94.28l2.19 2.16a1.41 1.41 0 01.28 2 1.41 1.41 0 01-1.94-.28l-2.19-2.21a1.41 1.41 0 01-.28-1.94v-.01zM47.1 13.45a1.41 1.41 0 01.28-2l2.18-2.18a1.41 1.41 0 011.94-.28 1.41 1.41 0 01-.28 1.94l-2.18 2.18a1.41 1.41 0 01-1.94.28v.06zM27.28 33.24a1.41 1.41 0 01.28-1.94l2.18-2.18a1.22 1.22 0 111.66 1.66l-2.18 2.18a1.41 1.41 0 01-1.94.28z" fill="#FFB000"></path><path d="M11.27 49.66a2.36 2.36 0 002.26-.38 2.48 2.48 0 00.79-2.83c-.11-.45-.87-3.86-.87-3.86-3.41 3.2-3.38 3.14-2.9 2.7a2.48 2.48 0 00-.94 2.77 2.36 2.36 0 001.65 1.59l.01.01zM33.7 49.66a2.36 2.36 0 002.26-.38 2.48 2.48 0 00.79-2.83c-.11-.45-.87-3.86-.87-3.86-3.41 3.2-3.38 3.14-2.9 2.7a2.48 2.48 0 00-.94 2.77 2.36 2.36 0 001.65 1.59l.01.01zM22.49 49.66a2.36 2.36 0 002.26-.38 2.48 2.48 0 00.79-2.83c-.11-.45-.87-3.86-.87-3.86-3.41 3.2-3.38 3.14-2.9 2.7a2.48 2.48 0 00-.94 2.77 2.36 2.36 0 001.65 1.59l.01.01zM15.99 56.24a2.36 2.36 0 002.26-.38 2.48 2.48 0 00.79-2.81c-.11-.45-.87-3.86-.87-3.86-3.41 3.2-3.38 3.14-2.9 2.7a2.48 2.48 0 00-.94 2.77 2.36 2.36 0 001.65 1.59l.01-.01zM27.16 56.24a2.36 2.36 0 002.26-.38 2.48 2.48 0 00.79-2.81c-.11-.45-.87-3.86-.87-3.86-3.41 3.2-3.38 3.14-2.9 2.7a2.48 2.48 0 00-.94 2.77 2.36 2.36 0 001.66 1.58z" fill="#53B9EA" fill-rule="nonzero"></path><path d="M42.74 31.78a7.24 7.24 0 00-4.2-4.46.43.43 0 01-.33-.49 9.72 9.72 0 00-8.49-9.78 1.1 1.1 0 01-.21-.07h-2.14l-1 .2a9.69 9.69 0 00-6.21 4.51.43.43 0 01-.48.26 7.2 7.2 0 00-7.31 3.5c-.24.4-.42.84-.61 1.21a16.34 16.34 0 00-2.29.33 7.16 7.16 0 00-5.4 6 1.46 1.46 0 01-.07.21v1.83c.12.555.27 1.102.45 1.64 1 2.63 3 3.74 5.75 4.24.072.018.142.041.21.07h26.27c.39-.1.79-.17 1.17-.29 2.88-1 4.61-2.46 5.17-5.45a1.43 1.43 0 01.07-.21v-1.86c-.11-.46-.2-.94-.35-1.39z" fill="#D0D0D0" fill-rule="nonzero"></path>
              </g>
            </svg>
          </div>
          <div className='sevendayforecast__date' >Saturday 18 February</div>
            <div className='sevendayforecast__mintemp' >21&#8451;</div>
            <div className='sevendayforecast__maxtemp' >30&#8451;</div>
            <div className='sevendayforecast__rainchance' >10%</div>
            <div className='sevendayforecast__rainamount' >1mm</div>
        </li>


       </ul>
      </div>
    </div>
  )
}

export default SevenDayForecast;