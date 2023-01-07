import './Statistics.css';
import rainfall from '../assets/Rainfall.png';
import rainfallGauge from '../assets/RainfallGauge.png';
import uvIndex from '../assets/UVIndex.png';
import wind from '../assets/Wind.png';

function Statistics (props) {
  return (
    <div className='statistics'>
      <div className='box'>
        <div className='stats__icon'>
          <img src={ rainfall } alt="Rainfall" />
        </div>
        <div className='stats__text'>
          Stats1
        </div>
      </div>
      <div className='box'>
        <div className='stats__icon'>
          <img src={ rainfallGauge } alt="Rainfall Gauge" />
        </div>
        <div className='stats__text'>
        Stats2
        </div>
      </div>
      <div className='box'>
        <div className='stats__icon'>
          <img src={ uvIndex } alt="UV Index" />
        </div>
        <div className='stats__text'>
        Stats3
        </div>
      </div>
      <div className='box'>
        <div className='stats__icon'>
          <img src={ wind } alt="Wind" />  
        </div>
      <div className='stats__text'>
      Stats4
      </div>
     </div>

    </div>
  )
}

export default Statistics;