import React, {useState} from 'react';
import './SearchForm.css';

function SearchForm(props) {
  const [location, setLocation] = useState(props.location);
  const clickHandler = () => {
    // Dummy code
    setLocation('location updated');
    console.log(location);
  }
  return (
    <form>
      <div className='searchform'>
        <label>Search for any location</label>
        <input type="text" placeholder="Gold Coast" />
      
      <div className='searchform__button'>
        <button type="submit" className='button' onClick={ clickHandler }>Submit</button>
      </div>
      </div>
    </form>
  )
}

export default SearchForm;