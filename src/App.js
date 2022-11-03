import './App.css';
import Summary from './components/Summary';

function App() {
  const forecast = {
    location: 'Gold Coast, Queensland',
    date: new Date(2022, 11, 3),
    concise: 'Mostly sunny, light winds from the North East. Possible evening shower.',
    temperature: '12 to 26 degrees' 
  };

  return (
    <div className="App">
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