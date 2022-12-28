import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return <nav className="navbar">
    <Link to="/" className="navbar-title">WeatherLink</Link>
    <ul>
      <li className="navbar-elements">
        <Link to="/locations">Locations</Link>
      </li>
      <li className="navbar-elements">
        <Link to="/charts">Charts</Link>
      </li>
      <li className="navbar-elements">
        <Link to="/search">Search</Link>
      </li>
    </ul>
  </nav>
}

export default NavBar;