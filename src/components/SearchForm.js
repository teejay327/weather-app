import React, {useState} from 'react';
import './SearchForm.css';

function SearchForm(props) {
  const [newLocation, setLocation] = useState(props.location);
  const locationChangeHandler = (event) => {
    setLocation(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const locationData = {
      enteredLocation: newLocation
    };

    props.onSaveLocation(locationData);
    setLocation('');
  };

  return (
    <form onSubmit={ submitHandler }>
      <div className='searchform'>
        <label>Search for a location in Australia</label>
        <input type="text" placeholder="Gold Coast" onChange={ locationChangeHandler } value={ newLocation }/>
      <div className='searchform__button'>
        <button type="submit" className='button'>Submit</button>
      </div>
      </div>
    </form>
  )
}

export default SearchForm;