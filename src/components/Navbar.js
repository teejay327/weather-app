function NavBar() {
  return <nav className="navbar">
    <a href="/" className="navbar-title">WeatherLink</a>
    <ul>
      <li className="navbar-elements">
        <a href="/locations">Locations</a>
      </li>
      <li className="navbar-elements">
        <a href="/charts">Maps</a>
      </li>
      <li className="navbar-elements">
        <a href="/search">Search</a>
      </li>
    </ul>
  </nav>
}

export default NavBar;