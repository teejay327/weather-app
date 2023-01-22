import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;
  return (
    <div className={ classes }>{ props.children }
    <div>
      <h3>Card</h3>
    </div>
    </div>
 )
}

export default Card;