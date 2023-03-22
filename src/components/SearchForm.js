import React, {useState} from 'react';
import './SearchForm.css';

function SearchForm(props) {
  const [newLocation, setLocation] = useState(props.location);
  const locationClickHandler = (event) => {
    setLocation(event.target.value);
    console.log(newLocation);
  }
  return (
    <form>
      <div className='searchform'>
        <label>Search for any location</label>
        <input type="text" placeholder="Gold Coast" value={ newLocation }/>
      <div className='searchform__button'>
        <button type="submit" className='button' onClick={ locationClickHandler }>Submit</button>
      </div>
      </div>
    </form>
  )
}

export default SearchForm;