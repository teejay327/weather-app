import './SevenDayForecast.css';

function SevenDayForecast() {
  return (
    <div className='sevendayforecast'>
      <div className='sevendayforecast__box'>
       <ul>
        <li>
          <div className='sevendayforecast__img'>
            <svg width="80px" height="60px" viewBox="0 0 60 60">
              <title>Showers Increasing</title>
              <g fill="none" fill-rule="evenodd">
                <path d="M20.13 10.22c-.65 0-1.17-.7-1.17-1.57V5.57c0-.88.53-1.57 1.17-1.57.64 0 1.17.7 1.17 1.57v3.08c0 .88-.53 1.57-1.17 1.57zM20.13 38.25c-.65 0-1.17-.7-1.17-1.57V33.6c0-.88.53-1.57 1.17-1.57.64 0 1.17.7 1.17 1.57v3.08c0 .88-.53 1.57-1.17 1.57z" fill="#FFB000"></path><circle fill="#FFB000" fill-rule="nonzero" cx="20.13" cy="21.12" r="8.74"></circle><path d="M31.03 21.12c0-.65.7-1.17 1.57-1.17h3.08c.88 0 1.57.53 1.57 1.17 0 .64-.7 1.17-1.57 1.17H32.6c-.88 0-1.57-.53-1.57-1.17zM3 21.12c0-.65.7-1.17 1.57-1.17h3.08c.88 0 1.57.53 1.57 1.17 0 .64-.7 1.17-1.57 1.17H4.57c-.88 0-1.57-.53-1.57-1.17zM27.84 28.83a1.41 1.41 0 011.94.28l2.18 2.18a1.22 1.22 0 11-1.66 1.66l-2.18-2.18a1.41 1.41 0 01-.28-1.94zM8.02 9.01a1.41 1.41 0 011.94.28l2.18 2.18a1.41 1.41 0 01.28 1.94 1.41 1.41 0 01-1.94-.28L8.3 10.95a1.41 1.41 0 01-.28-1.94zM27.84 13.41a1.41 1.41 0 01.28-1.94l2.18-2.18a1.41 1.41 0 011.94-.28 1.41 1.41 0 01-.28 1.94l-2.19 2.18a1.41 1.41 0 01-1.94.28h.01zM8.02 33.23a1.41 1.41 0 01.28-1.94l2.18-2.18a1.41 1.41 0 011.94-.28 1.41 1.41 0 01-.28 1.94l-2.18 2.18a1.41 1.41 0 01-1.94.28z" fill="#FFB000"></path>
                <path d="M23.41 49.65a2.36 2.36 0 002.26-.38 2.48 2.48 0 00.79-2.8c-.11-.45-.87-3.86-.87-3.86-3.41 3.2-3.38 3.14-2.9 2.7a2.48 2.48 0 00-.92 2.76 2.36 2.36 0 001.65 1.59l-.01-.01zM45.84 49.65a2.36 2.36 0 002.26-.38 2.48 2.48 0 00.79-2.8c-.11-.45-.87-3.86-.87-3.86-3.41 3.2-3.38 3.14-2.9 2.7a2.48 2.48 0 00-.94 2.77 2.36 2.36 0 001.65 1.59l.01-.02zM34.62 49.65a2.36 2.36 0 002.26-.38 2.48 2.48 0 00.79-2.8c-.11-.45-.87-3.86-.87-3.86-3.41 3.2-3.38 3.14-2.9 2.7a2.48 2.48 0 00-.94 2.77 2.36 2.36 0 001.65 1.59l.01-.02zM28.13 56.24a2.36 2.36 0 002.26-.38 2.48 2.48 0 00.79-2.81c-.11-.45-.87-3.86-.87-3.86-3.41 3.2-3.38 3.14-2.9 2.7a2.48 2.48 0 00-.94 2.77 2.36 2.36 0 001.65 1.59l.01-.01zM39.34 56.24a2.36 2.36 0 002.26-.38 2.48 2.48 0 00.79-2.81c-.11-.45-.87-3.86-.87-3.86-3.41 3.2-3.38 3.14-2.9 2.7a2.48 2.48 0 00-.94 2.77 2.36 2.36 0 001.65 1.59l.01-.01z" fill="#53B9EA" fill-rule="nonzero"></path><path d="M54.87 31.78a7.24 7.24 0 00-4.2-4.46.43.43 0 01-.33-.49 9.72 9.72 0 00-8.49-9.78 1.1 1.1 0 01-.21-.07H39.5l-1 .2a9.69 9.69 0 00-6.29 4.51.43.43 0 01-.48.26 7.2 7.2 0 00-7.22 3.52c-.24.4-.42.84-.61 1.21a16.34 16.34 0 00-2.29.33 7.16 7.16 0 00-5.4 6 1.46 1.46 0 01-.07.21v1.83c.12.555.27 1.102.45 1.64 1 2.63 3 3.74 5.75 4.24.072.018.142.041.21.07h26.22c.39-.1.79-.17 1.17-.29 2.88-1 4.61-2.46 5.17-5.45a1.43 1.43 0 01.07-.21v-1.88a6.65 6.65 0 00-.31-1.39z" fill="#D0D0D0" fill-rule="nonzero"></path>
              </g>
            </svg>
          </div>

            <div className='sevendayforecast__date' >Tuesday 6 August</div>
            <div className='sevendayforecast__mintemp' >12&#8451;</div>
            <div className='sevendayforecast__maxtemp' >24&#8451;</div>
            <div className='sevendayforecast__rainchance' >70%</div>
            <div className='sevendayforecast__rainamount' >1-5mm</div>
        </li>

        <li>
          <div>
          <svg width="80px" height="60px" viewBox="0 0 60 60">
            <title>Showers</title>
            <g fill="none" fill-rule="nonzero">
              <path d="M17.26 42.65a2.36 2.36 0 002.26-.38 2.48 2.48 0 00.79-2.81c-.11-.45-.87-3.86-.87-3.86-3.41 3.2-3.38 3.14-2.9 2.7a2.48 2.48 0 00-.94 2.77 2.36 2.36 0 001.66 1.58zM39.73 42.65a2.36 2.36 0 002.26-.38 2.48 2.48 0 00.79-2.81c-.11-.45-.87-3.86-.87-3.86-3.41 3.2-3.38 3.14-2.9 2.7a2.48 2.48 0 00-.94 2.77 2.36 2.36 0 001.65 1.59l.01-.01zM28.52 42.65a2.36 2.36 0 002.26-.38 2.48 2.48 0 00.79-2.81c-.11-.45-.87-3.86-.87-3.86-3.41 3.2-3.38 3.14-2.9 2.7a2.48 2.48 0 00-.94 2.77 2.36 2.36 0 001.65 1.59l.01-.01zM22.02 49.24a2.36 2.36 0 002.24-.38 2.48 2.48 0 00.79-2.81c-.11-.45-.87-3.86-.87-3.86-3.39 3.15-3.36 3.15-2.92 2.7a2.48 2.48 0 00-.94 2.77 2.36 2.36 0 001.65 1.59l.05-.01zM33.26 49.24a2.36 2.36 0 002.26-.38 2.48 2.48 0 00.74-2.81c-.11-.45-.87-3.86-.87-3.86-3.41 3.2-3.38 3.14-2.9 2.7a2.48 2.48 0 00-.94 2.77 2.36 2.36 0 001.71 1.58z" fill="#53B9EA"></path>
              <path d="M48.77 24.78a7.24 7.24 0 00-4.21-4.44.43.43 0 01-.33-.49 9.72 9.72 0 00-8.49-9.78 1.1 1.1 0 01-.21-.07H33.4l-1 .2a9.69 9.69 0 00-6.29 4.51.43.43 0 01-.48.26 7.2 7.2 0 00-7.26 3.52c-.24.4-.42.84-.61 1.21a16.34 16.34 0 00-2.29.33 7.16 7.16 0 00-5.4 6 1.46 1.46 0 01-.07.21v1.83c.12.555.27 1.102.45 1.64 1 2.63 3 3.74 5.75 4.24.072.018.142.041.21.07h26.3c.39-.1.79-.17 1.17-.29 2.88-1 4.61-2.46 5.17-5.45a1.43 1.43 0 01.07-.21v-1.9c-.11-.46-.2-.94-.35-1.39z" fill="#D0D0D0">
              </path>
            </g>
          </svg>

          </div>
            <div className='sevendayforecast__date' >Wednesday 7 August</div>
            <div className='sevendayforecast__mintemp' >12&#8451;</div>
            <div className='sevendayforecast__maxtemp' >24&#8451;</div>
            <div className='sevendayforecast__rainchance' >90%</div>
            <div className='sevendayforecast__rainamount' >5-10mm</div>
        </li>

        <li>
          <div>
          <svg width="80px" height="60px" viewBox="0 0 60 60">
            <title>Mostly Sunny</title>
              <g fill="none" fill-rule="evenodd">
                <path d="M27.09 16.66c-.8 0-1.45-.87-1.45-1.93v-3.8c0-1.09.65-1.93 1.45-1.93.8 0 1.48.86 1.48 1.92v3.8c0 1.09-.65 1.93-1.45 1.93l-.03.01zM27.09 51.18c-.8 0-1.45-.87-1.45-1.93v-3.79c0-1.09.65-1.93 1.45-1.93.8 0 1.48.85 1.48 1.93v3.8c0 1.09-.65 1.93-1.45 1.93l-.03-.01zM27.09 19.32c-5.943 0-10.76 4.817-10.76 10.76s4.817 10.76 10.76 10.76 10.76-4.817 10.76-10.76c-.006-5.94-4.82-10.754-10.76-10.76zM40.52 30.08c0-.8.87-1.45 1.93-1.45h3.8c1.09 0 1.93.65 1.93 1.45 0 .8-.87 1.45-1.93 1.45h-3.8c-1.09 0-1.93-.65-1.93-1.45zM6 30.08c0-.8.87-1.45 1.93-1.45h3.8c1.09 0 1.93.65 1.93 1.45 0 .8-.87 1.45-1.93 1.45h-3.8c-1.09 0-1.93-.65-1.93-1.45zM36.57 39.57a1.74 1.74 0 012.39.35l2.69 2.69a1.51 1.51 0 11-2 2l-2.72-2.65a1.73 1.73 0 01-.36-2.39zM12.18 15.16a1.74 1.74 0 012.39.3l2.69 2.69a1.73 1.73 0 01.31 2.43 1.74 1.74 0 01-2.39-.35l-2.61-2.68a1.73 1.73 0 01-.35-2.39h-.04zM36.57 20.58a1.74 1.74 0 01.35-2.39l2.65-2.73a1.73 1.73 0 012.39-.35 1.74 1.74 0 01-.35 2.39l-2.69 2.69c-.57.746-1.63.9-2.39.35l.04.04zM12.18 44.99a1.74 1.74 0 01.39-2.39l2.69-2.69a1.73 1.73 0 012.31-.34 1.74 1.74 0 01-.35 2.39l-2.65 2.69c-.57.746-1.63.9-2.39.35v-.01z" fill="#FFB000"></path>
                <path d="M53.04 38.07a5.73 5.73 0 00-3.33-3.53.34.34 0 01-.26-.38 7.69 7.69 0 00-6.72-7.7.87.87 0 01-.16-.1h-1.7l-.76.16a7.67 7.67 0 00-5 3.57.34.34 0 01-.38.2 5.7 5.7 0 00-5.75 2.79c-.19.32-.34.66-.48 1a12.93 12.93 0 00-1.81.26 5.66 5.66 0 00-4.27 4.72 1.15 1.15 0 01-.06.17v1.45c.096.44.216.874.36 1.3.82 2.08 2.34 3 4.55 3.36l.17.06h20.81c.31-.08.63-.13.93-.23 2.28-.75 3.65-1.95 4.09-4.31a1.13 1.13 0 01.06-.17v-1.52c-.1-.37-.17-.71-.29-1.1z" fill="#E9E9E9" fill-rule="nonzero">
                </path>
              </g>
          </svg>
          </div>
            <div className='sevendayforecast__date' >Thursday 8 August</div>
            <div className='sevendayforecast__mintemp' >12&#8451;</div>
            <div className='sevendayforecast__maxtemp' >23&#8451;</div>
            <div className='sevendayforecast__rainchance' >40%</div>
            <div className='sevendayforecast__rainamount' >1-5mm</div>
        </li>

        <li>
          <div>
          <svg width="80px" height="60px" viewBox="0 0 60 60">
            <title>Sunny</title>
            <g fill="#FFB000" fill-rule="evenodd">
              <path d="M29.09 16.66c-.8 0-1.45-.87-1.45-1.93v-3.8c0-1.09.65-1.93 1.45-1.93.8 0 1.45.87 1.45 1.93v3.8c0 1.09-.65 1.93-1.45 1.93zM29.09 51.18c-.8 0-1.45-.87-1.45-1.93v-3.8c0-1.09.65-1.93 1.45-1.93.8 0 1.45.87 1.45 1.93v3.8c0 1.09-.65 1.93-1.45 1.93zM29.09 19.32c-5.941.006-10.754 4.825-10.75 10.767.004 5.94 4.822 10.755 10.763 10.753 5.942-.002 10.757-4.819 10.757-10.76-.006-5.944-4.826-10.76-10.77-10.76zM42.52 30.08c0-.8.87-1.45 1.93-1.45h3.8c1.09 0 1.93.65 1.93 1.45 0 .8-.87 1.45-1.93 1.45h-3.8c-1.09 0-1.93-.65-1.93-1.45zM8 30.08c0-.8.87-1.45 1.93-1.45h3.8c1.09 0 1.93.65 1.93 1.45 0 .8-.87 1.45-1.93 1.45h-3.8c-1.09 0-1.93-.65-1.93-1.45zM38.59 39.59a1.74 1.74 0 012.39.35l2.68 2.65a1.51 1.51 0 11-2 2l-2.69-2.69a1.73 1.73 0 01-.38-2.31zM14.18 15.16a1.74 1.74 0 012.39.35l2.69 2.69a1.73 1.73 0 01.34 2.39 1.74 1.74 0 01-2.39-.35l-2.69-2.65a1.73 1.73 0 01-.35-2.39l.01-.04zM38.59 20.59a1.74 1.74 0 01.35-2.39l2.69-2.69a1.73 1.73 0 012.39-.35 1.74 1.74 0 01-.36 2.43l-2.69 2.69a1.73 1.73 0 01-2.38.31zM14.18 44.99a1.74 1.74 0 01.34-2.4l2.69-2.69a1.73 1.73 0 012.39-.31 1.74 1.74 0 01-.35 2.39l-2.69 2.69c-.57.746-1.63.9-2.39.35l.01-.03z">
              </path>
            </g>
          </svg>
          </div>
            <div className='sevendayforecast__date' >Friday 9 August</div>
            <div className='sevendayforecast__mintemp' >11&#8451;</div>
            <div className='sevendayforecast__maxtemp' >23&#8451;</div>
            <div className='sevendayforecast__rainchance' >10%</div>
            <div className='sevendayforecast__rainamount' >2mm</div>
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
          <div className='sevendayforecast__date' >Saturday 10 August</div>
            <div className='sevendayforecast__mintemp' >12&#8451;</div>
            <div className='sevendayforecast__maxtemp' >21&#8451;</div>
            <div className='sevendayforecast__rainchance' >50%</div>
            <div className='sevendayforecast__rainamount' >5mm</div>
        </li>

        <li>
          <div>
            <svg width="80px" height="60px" viewBox="0 0 60 60">
              <title>Possible Shower</title>
              <g fill="none" fill-rule="evenodd">
              <path d="M27.09 13.66c-.8 0-1.45-.87-1.45-1.93v-3.8c0-1.09.65-1.93 1.45-1.93.8 0 1.48.86 1.48 1.93v3.8c0 1.09-.65 1.93-1.45 1.93h-.03zM27.09 48.18c-.8 0-1.45-.87-1.45-1.93v-3.8c0-1.09.65-1.93 1.45-1.93.8 0 1.48.83 1.48 1.93v3.8c0 1.09-.65 1.93-1.45 1.93h-.03zM27.09 16.35a10.76 10.76 0 1010.76 10.73c-.022-5.929-4.831-10.725-10.76-10.73zM40.52 27.08c0-.8.87-1.45 1.93-1.45h3.8c1.09 0 1.93.65 1.93 1.45 0 .8-.87 1.45-1.93 1.45h-3.8c-1.09 0-1.93-.65-1.93-1.45zM6 27.08c0-.8.87-1.45 1.93-1.45h3.8c1.09 0 1.93.65 1.93 1.45 0 .8-.87 1.45-1.93 1.45h-3.8c-1.09 0-1.93-.65-1.93-1.45zM36.57 36.57a1.74 1.74 0 012.39.35l2.69 2.69a1.51 1.51 0 11-2 2l-2.69-2.69a1.73 1.73 0 01-.39-2.35zM12.18 12.17a1.74 1.74 0 012.39.35l2.69 2.69a1.73 1.73 0 01.31 2.38 1.74 1.74 0 01-2.39-.35l-2.61-2.68a1.73 1.73 0 01-.35-2.39h-.04zM36.57 17.59a1.74 1.74 0 01.35-2.39l2.65-2.69a1.73 1.73 0 012.39-.35 1.74 1.74 0 01-.35 2.39l-2.69 2.69c-.57.746-1.63.9-2.39.35h.04zM12.18 42a1.74 1.74 0 01.39-2.39l2.69-2.69a1.73 1.73 0 012.31-.35 1.74 1.74 0 01-.35 2.39l-2.65 2.69c-.57.746-1.63.9-2.39.35z" fill="#FFB000"></path><path d="M28.08 49.35a1.88 1.88 0 001.8-.3 2 2 0 00.63-2.24c-.09-.36-.69-3.08-.69-3.08-2.72 2.55-2.69 2.5-2.31 2.15a2 2 0 00-.75 2.2 1.88 1.88 0 001.32 1.27zM45.94 49.35a1.88 1.88 0 001.8-.3 2 2 0 00.63-2.24c-.09-.36-.69-3.08-.69-3.08-2.72 2.55-2.69 2.5-2.31 2.15a2 2 0 00-.75 2.2 1.88 1.88 0 001.32 1.27zM37.01 49.35a1.88 1.88 0 001.8-.3 2 2 0 00.63-2.24c-.09-.36-.69-3.08-.69-3.08-2.72 2.55-2.69 2.5-2.31 2.15a2 2 0 00-.75 2.2 1.88 1.88 0 001.32 1.27zM31.84 54.62a1.88 1.88 0 001.8-.3 2 2 0 00.63-2.24c-.09-.36-.69-3.08-.69-3.08-2.72 2.55-2.69 2.5-2.31 2.15a2 2 0 00-.75 2.2 1.88 1.88 0 001.32 1.26v.01zM40.77 54.62a1.88 1.88 0 001.8-.27 2 2 0 00.63-2.24c-.09-.36-.69-3.08-.69-3.08-2.72 2.55-2.69 2.5-2.31 2.15a2 2 0 00-.75 2.2 1.88 1.88 0 001.32 1.26v-.02z" fill="#53B9EA" fill-rule="nonzero"></path><path d="M53.14 35.14a5.76 5.76 0 00-3.35-3.56.35.35 0 01-.26-.39 7.74 7.74 0 00-6.76-7.79.87.87 0 01-.2-.05h-1.7l-.76.16a7.72 7.72 0 00-5 3.59.34.34 0 01-.38.2 5.73 5.73 0 00-5.79 2.8c-.19.32-.34.67-.49 1a13 13 0 00-1.82.26 5.7 5.7 0 00-4.3 4.75 1.16 1.16 0 01-.06.17v1.46c.095.443.216.88.36 1.31.83 2.09 2.36 3 4.58 3.38l.17.06h20.93c.31-.08.63-.13.93-.23 2.3-.76 3.67-2 4.12-4.34a1.14 1.14 0 01.06-.17v-1.5c-.09-.37-.16-.75-.28-1.11z" fill="#E9E9E9" fill-rule="nonzero">
              </path>
              </g>
            </svg>
          </div>
          <div className='sevendayforecast__date' >Sunday 11 August</div>
            <div className='sevendayforecast__mintemp' >11&#8451;</div>
            <div className='sevendayforecast__maxtemp' >23&#8451;</div>
            <div className='sevendayforecast__rainchance' >70%</div>
            <div className='sevendayforecast__rainamount' >1-5mm</div>
        </li>

        <li>
          <div>
          <svg width="80px" height="60px" viewBox="0 0 60 60">
            <title>Sunny</title>
            <g fill="#FFB000" fill-rule="evenodd">
              <path d="M29.09 16.66c-.8 0-1.45-.87-1.45-1.93v-3.8c0-1.09.65-1.93 1.45-1.93.8 0 1.45.87 1.45 1.93v3.8c0 1.09-.65 1.93-1.45 1.93zM29.09 51.18c-.8 0-1.45-.87-1.45-1.93v-3.8c0-1.09.65-1.93 1.45-1.93.8 0 1.45.87 1.45 1.93v3.8c0 1.09-.65 1.93-1.45 1.93zM29.09 19.32c-5.941.006-10.754 4.825-10.75 10.767.004 5.94 4.822 10.755 10.763 10.753 5.942-.002 10.757-4.819 10.757-10.76-.006-5.944-4.826-10.76-10.77-10.76zM42.52 30.08c0-.8.87-1.45 1.93-1.45h3.8c1.09 0 1.93.65 1.93 1.45 0 .8-.87 1.45-1.93 1.45h-3.8c-1.09 0-1.93-.65-1.93-1.45zM8 30.08c0-.8.87-1.45 1.93-1.45h3.8c1.09 0 1.93.65 1.93 1.45 0 .8-.87 1.45-1.93 1.45h-3.8c-1.09 0-1.93-.65-1.93-1.45zM38.59 39.59a1.74 1.74 0 012.39.35l2.68 2.65a1.51 1.51 0 11-2 2l-2.69-2.69a1.73 1.73 0 01-.38-2.31zM14.18 15.16a1.74 1.74 0 012.39.35l2.69 2.69a1.73 1.73 0 01.34 2.39 1.74 1.74 0 01-2.39-.35l-2.69-2.65a1.73 1.73 0 01-.35-2.39l.01-.04zM38.59 20.59a1.74 1.74 0 01.35-2.39l2.69-2.69a1.73 1.73 0 012.39-.35 1.74 1.74 0 01-.36 2.43l-2.69 2.69a1.73 1.73 0 01-2.38.31zM14.18 44.99a1.74 1.74 0 01.34-2.4l2.69-2.69a1.73 1.73 0 012.39-.31 1.74 1.74 0 01-.35 2.39l-2.69 2.69c-.57.746-1.63.9-2.39.35l.01-.03z">
              </path>
            </g>
          </svg>
          </div>
            <div className='sevendayforecast__date' >Monday 12 August</div>
            <div className='sevendayforecast__mintemp' >12&#8451;</div>
            <div className='sevendayforecast__maxtemp' >23&#8451;</div>
            <div className='sevendayforecast__rainchance' >5%</div>
            <div className='sevendayforecast__rainamount' >1mm</div>
        </li>


       </ul>
      </div>
    </div>
  )
}

export default SevenDayForecast;