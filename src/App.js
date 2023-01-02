import './App.css';
import Summary from './components/Summary';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Charts from './components/Charts';
import Locations from './components/Locations';
import { Route, Routes } from 'react-router-dom';
import './components/NavBar.css';
import Statistics from './components/Statistics';

function App() {
  const forecast = {
    location: 'Gold Coast, Queensland',
    date: new Date(2023, 0, 1),
    concise: 'Mostly sunny, light winds from the North East. Possible evening shower.',
    temperature: '12 to 26 degrees' 
  };

  const stats = { 
    chanceRain: '20%',
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
        <h1>Weather Forecast</h1>
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
        <div className="container__charts">
          <h2>images container</h2>
        </div>
      </div>

      

    </div>
  );
}

export default App;