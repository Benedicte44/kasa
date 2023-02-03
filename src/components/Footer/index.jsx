// The component for our footer
import { Link } from 'react-router-dom'
import logoFooter from '../../assets/logoFooter.svg'

import './_index.scss'

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
