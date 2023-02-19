//import Card from './UI/Card';
import './Statistics.css';
//import rainfall from '../assets/Rainfall.png';
//import rainfallGauge from '../assets/RainfallGauge.png';
import uvIndex from '../assets/UVIndex.png';
import wind from '../assets/Wind.png';
import rain from '../assets/rainy-outline.svg';

function Statistics (props) {
  return (
    <div className='statistics'>
      <div className='statistics__title'>
        <h3>Tomorrow</h3>
        <p>Possible showers</p>
      </div>

      <div className='box'>
        <div className='stats__icon'>
          <img src={ rain } alt="Rainfall"/>
          {/* <img src={ rainfall } alt="Rainfall"/> */}
        </div>
        <div className='stats__text'>
          <div className='stats__text-title'>
            Chance of rain:
          </div>
          <div className='stats__text-numbers'>
            30%
          </div>       
        </div>
      </div>



      <div className='box'>
        <div className='stats__icon'>

        <svg width="40px" height="40px" viewBox="0 0 46 46">
          <g fill="none" fill-rule="evenodd">
            <circle fill="#98cfdc" cx="23" cy="23" r="23"></circle>
            <g transform="translate(15 9)">
              <rect stroke="#000000" stroke-width="1.7" x="0.85" y="0.85" width="15.3" height="26.118" rx="1"></rect>
              <path stroke="#000000" stroke-width="1.7" stroke-linecap="round" d="M11 11.5h5M11 16.5h5M11 6.5h5"></path>
              <path d="M16 20.853c-.28.595-1.635.893-4.065.893C8.767 21.746 7.961 20 4.921 20c-1.316 0-2.623.284-3.921.853V27h15v-6.147z" fill="#000000"></path>
            </g>
          </g>
        </svg>
          
          {/* <img src={ rainfallGauge } alt="Rainfall Gauge" /> */}
        </div>
        <div className='stats__text'>
          <div className='stats__text-title'>
            Amount of rain:
          </div>
          <div className='stats__text-numbers'>
            5-10mm
          </div> 
        </div>
      </div>

      <div className='box'>
        <div className='stats__icon'>
          <img src={ uvIndex } alt="UV Index" />
        </div>
        <div className='stats__text'>
          <div className='stats__text-title'>
            UV Index:
          </div>
          <div className='stats__text-numbers'>
            Very high
          </div>       
        </div>
      </div>



      <div className='box'>
        <div className='stats__icon'>
{/*         <svg width="40px" height="40px" viewBox="0 0 46 46">
<g fill="none" fill-rule="evenodd"><circle fill="#53B9EA" cx="23" cy="23" r="23"></circle>
<path d="M20.05 34.353c2.62.899 5.534.424 7.707-1.256 2.913-2.21 4.004-5.996 2.695-9.347C30.077 22.263 27.485 11 27.485 11h0c-11.631 10.57-11.529 10.372-9.892 8.918-3.01 2.05-4.306 5.75-3.206 9.15.814 2.574 2.942 4.56 5.628 5.252l.034.033z" 
stroke="#FFF" stroke-width="2" stroke-linejoin="round"></path></g>

</svg> */}
          <img src={ wind } alt="Wind" />  
        </div>
        <div className='stats__text'>
          <div className='stats__text-title'>
            Wind speed:
          </div>
          <div className='stats__text-numbers'>
            10-15km/h
          </div>     
        </div>
      </div>


    </div>   
  )
}

export default Statistics;