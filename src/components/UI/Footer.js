import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
    <nav>
      <ul>
        <li>
          <a href="#">WeatherLink
          </a>
        </li>
        <li>
          <a class="socialmedia" href="#">Social media</a>
          <img src="/images/logos/twitter.png" alt="Twitter logo" width="30" height="30"></img>
        </li>
        <li>
          <a href="#">Copyright@2023WeatherLink v1.0</a>
        </li>
      </ul>
    </nav>
  </footer>
  )
}

export default Footer;