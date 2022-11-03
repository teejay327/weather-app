import Date from './Date';

function Summary(props) {
  //const date = props.date.toLocaleString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  return (
    <div className="summary">
      <div className="summary__location">
        <h2>{ props.location }</h2>
      </div>
      <Date date={ props.date }/>
      <div className="summary__concise">
        { props.concise }
      </div>
      <div className="summary__temperatures">
        <h3>{ props.temperature }</h3>
      </div>
    </div>)
} 

export default Summary;