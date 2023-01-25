import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;
  return (
    <div className={ classes }>{ props.children }
      <div className='icon'></div>
      <div className='information'></div>
    </div>
 )
}

export default Card;