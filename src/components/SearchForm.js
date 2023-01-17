import React, {useState} from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <form>
      <div className='searchform'>
        <label>Search for any location</label>
        <input type="text" placeholder="Gold Coast" />
      
      <div className='searchform__button'>
        <button type="submit">Submit</button>
      </div>
      </div>
    </form>
  )
}

export default SearchForm;