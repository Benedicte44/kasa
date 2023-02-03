// the component for our header

import logo from '../../assets/logo.svg'
import { NavLink, Link } from 'react-router-dom'
import './_index.scss'

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo Kasa Red" className="header__logo" />
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav_link active' : 'nav_link'
          }
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav_link active' : 'nav_link'
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
