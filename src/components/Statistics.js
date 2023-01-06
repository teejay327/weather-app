import './Statistics.css';

function Statistics (props) {
  return (
    <div className='statistics'>
      <div className='box'>
        <div className='stats__icon'>
          Icon1
        </div>
        <div className='stats__text'>
          Stats1
        </div>
      </div>
      <div className='box'>
        <div className='stats__icon'>
        Icon2
        </div>
        <div className='stats__text'>
        Stats2
        </div>
      </div>
      <div className='box'>
        <div className='stats__icon'>
        Icon3
        </div>
        <div className='stats__text'>
        Stats3
        </div>
      </div>
      <div className='box'>
        <div className='stats__icon'>
        Icon4     
        </div>
      <div className='stats__text'>
      Stats4
      </div>
     </div>

    </div>
  )
}

export default Statistics;