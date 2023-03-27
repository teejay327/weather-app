import SearchForm from './SearchForm';

function Home(props) {
  const saveLocationHandler = (enteredLocationData) => {
    const locationData = {
      enteredLocationData
    }
    console.log(locationData);
    props.onChangeLocation(locationData);
  }

  return (
    <div>
      <h1>Home</h1>
      <div className='Search-form'>
          <SearchForm onSaveLocation={saveLocationHandler} />
        </div> 
    </div>

  )
}

export default Home;
