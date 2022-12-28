import './App.css';
import Summary from './components/Summary';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Charts from './components/Charts';
import Locations from './components/Locations';
import { Route, Routes } from 'react-router-dom';
import './components/NavBar.css';

function App() {
  /*
  let Component;
  switch (window.location.pathname) {
    case "/": 
      Component = Home;
      break;
    case "/charts":
      Component = Charts;
      break;
    case "/locations":
      Component = Locations;
      break;
    default:
      Component = Home;
  };
  */

  const forecast = {
    location: 'Gold Coast, Queensland',
    date: new Date(2022, 11, 19),
    concise: 'Mostly sunny, light winds from the North East. Possible evening shower.',
    temperature: '12 to 26 degrees' 
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
      <header className="App-header">
          <h1>Weather Forecast</h1>
          <Summary
            location = { forecast.location }
            date = { forecast.date }
            concise = { forecast.concise }
            temperature = { forecast.temperature }
          ></Summary>
      </header>

    </div>
  );
}

export default App;