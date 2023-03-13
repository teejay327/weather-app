import './App.css';
import Summary from './components/Summary';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Charts from './components/Charts';
import Locations from './components/Locations';
import SearchForm from './components/SearchForm';
import { Route, Routes } from 'react-router-dom';
import Warnings from './components/Warnings';
import './components/NavBar.css';
import Statistics from './components/Statistics';
import satelliteMap from './assets/Satellite_Australia_1.jpg';
import brisbaneRadar from './assets/Brisbane_radar_1.gif';
import SevenDayForecast from './components/SevenDayForecast';

function App() {
  const forecast = {
    location: 'Gold Coast, Queensland',
    date: new Date(2023, 2, 8),
    concise: 'Mostly sunny, light winds from the North East. Possible evening shower.',
    temperature: '22',
    humidity: '76%',
    rainfall: '1mm',
    wind: 'SSE 17km/h'
  };

  const stats = { 
    chanceRain: '50%',
    rainfall: '<1mm',
    uvIndex: 'Very high',
    wind: '15-20kmh'
  };

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/charts" element={ <Charts /> } />
          <Route path="/locations" element={ <Locations /> }  />
          <Route path="/search" element={ <SearchForm location = { forecast.location } /> } />
        </Routes>
      </div>
      <div className="App-container">
        <div className="container__heading">
          <h3>Weather Forecast</h3>
        </div>     
        <div className="container__forecast">
          <Summary
            location = { forecast.location }
            date = { forecast.date }
            concise = { forecast.concise }
            temperature = { forecast.temperature }
            humidity = { forecast.humidity }
            rainfall = { forecast.rainfall }
            wind = { forecast.wind }
          ></Summary>
          <Statistics
            chance = { stats.chanceRain }
            amount = { stats.rainfall}
            uv = { stats.uvIndex }
            wind = { stats.wind }
          ></Statistics>
        </div>


        <div className="container__heading">
          <h3>7 day forecast for { forecast.location }</h3>
        </div>
        <div className="container__sevendayforecast">
          <SevenDayForecast
            location = { forecast.location }
          ></SevenDayForecast>
        </div>


        <div className="charts">
          <div className="container__heading">
            <h3>Weather maps and charts</h3>
          </div>      
          <div className="container__charts">
            <div className="radar__charts">
              <img src={ brisbaneRadar } alt="Brisbane radar map" />
            </div>
            <div className="satellite__charts">
              <img src={ satelliteMap } alt="Satellite map" />              
            </div>
            <div>
            <Warnings >
              
            </Warnings>
          </div>
          </div>

        </div>
        
      </div>
    </div>
  );

  <footer>
    <nav>
      <ul>
        <li>
          <a href="#">WeatherLink</a>
        </li>
        <li>
          <a href="#">Social media</a>
        </li>
        <li>
          <a href="#">Copyright@2023WeatherLink v1.0</a>
        </li>
      </ul>
    </nav>
  </footer>
}

export default App;