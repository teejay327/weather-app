import './Date.css';

function Date(props) {
  const date = props.date.toLocaleString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div>
      <div className="summary__date">
        <div>{ date }</div>
      </div>
    </div>
  )
}

export default Date;