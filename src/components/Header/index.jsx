/* Header component used at the app's root
 * It returns a header container with the logo and a nav bar section */

import logo from '../../assets/images/logo.svg' // The logo image is imported
import { NavLink, Link } from 'react-router-dom' // The components Link and NavLink (useful to define the status active of the link & useful for seo) are imported from react router

function Header() {
  return (
    <header>
      {/* The header's logo is a link that sends to the home page component */}
      <Link to="/">
        <img src={logo} alt="Logo Kasa Red" className="header__logo" />
      </Link>
      <nav>
        {/* The nav bar of the header, that contains the nav bar Links */}
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav__link active' : 'nav__link'
          }
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav__link active' : 'nav__link'
          }
          to="/about"
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
