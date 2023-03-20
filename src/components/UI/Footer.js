import './Footer.css';
import facebook from '../../images/logos/facebook.png';
import instagram from '../../images/logos/instagram.png';
import twitter from '../../images/logos/twitter.png';

function Footer() {
  return (
    <footer className="footer">
    <nav className="footer-nav">
      <ul>
        <div className="footer-logo">
        <li>
          <h3>WeatherLink</h3>
        </li>
        </div>

        <div className="footer-socialmedia">
          <li>
            <a className="socialmedia" href="https://www.facebook.com/login.php">
              <img src={ facebook } alt="Facebook logo" width="30" height="30"></img>
            </a>
          </li>
          <li>
            <a className="socialmedia" href="https://www.instagram.com/accounts/login/">
              <img src={ instagram } alt="Instagram logo" width="30" height="30"></img>
            </a>
          </li>
          <li>
            <a className="socialmedia" href="https://twitter.com/login">
              <img src={ twitter } alt="Twitter logo" width="30" height="30"></img>
            </a>
          </li>
        </div>

        <div className="footer-notes">
          <li>
            <div>Copyright@2023WeatherLink v1.0</div>
          </li>
        </div>
      </ul>
    </nav>
  </footer>
  )
}

export default Footer;