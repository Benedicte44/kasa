/* Footer component used at the root of the app
 * it returns a container with the logo that is a link to the homepage and a text */
import { Link } from 'react-router-dom' // The Link component of react
import logoFooter from '../../assets/images/logoFooter.svg' // the image of the logo

function Footer() {
  return (
    <footer>
      <Link to="/">
        <img src={logoFooter} alt="Logo Kasa White" className="footer__logo" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
