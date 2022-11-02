function Summary () {
  const summaryDate = new Date(2022, 11, 2);
  const summaryLocation = 'Location: Gold Coast, QLD';
  const summaryConcise = 'Mostly sunny, light winds from the North East. Possible evening shower.';
  const summaryTemperatures = "12 &deg;C to 26 &#176;";
  return (
    <div className="summary">
      <div className="summary__location">
        <h2>{ summaryLocation }</h2>
      </div>
  	  <div className="summary__date">
        { summaryDate.toISOString() };
      </div>
      <div className="summary__concise">
        { summaryConcise };
      </div>
      <div className="summary__temperatures">
        <h3>{ summaryTemperatures }</h3>
      </div>
    </div>)
} 

export default Summary;