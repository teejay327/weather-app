import './App.css';
import Summary from './components/Summary';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Charts from './components/Charts';
import Locations from './components/Locations';
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
    date: new Date(2023, 0, 29),
    concise: 'Mostly sunny, light winds from the North East. Possible evening shower.',
    temperature: '12 to 26 degrees' 
  };

  const stats = { 
    chanceRain: '50%',
    rainfall: '<1mm',
    uvIndex: 'Very high',
    wind: 'NE 20kmh'
  };

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/charts" element={ <Charts /> } />
          <Route path="/locations" element={ <Locations /> }  />
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
          ></Summary>
          <Statistics
            chance = { stats.chanceRain }
            amount = { stats.rainfall}
            uv = { stats.uvIndex }
            wind = { stats.wind }
          ></Statistics>
        </div>

        <div className="sevendayforecast">
          <div className="container__heading">
            <h3>7 day forecast</h3>
          </div>
          <div className="container__sevendayforecast">
            <SevenDayForecast
              location = { forecast.location }
            ></SevenDayForecast>
          </div>
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
}

export default App;