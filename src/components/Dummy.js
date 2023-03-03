import './Dummy.css';

function Dummy(props) {
  return (
    <div class='dummy1' >
      <p>Storms</p>
      <div>{ props.wind }</div>
    </div>
  )
}

export default Dummy;