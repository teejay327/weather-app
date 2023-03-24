import SearchForm from './SearchForm';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className='Search-form'>
          <SearchForm onSaveLocation />
        </div> 
    </div>

  )
}

export default Home;
