/* The errorpage component
 * It returns a section displaying error information and a link to return on the home page*/
import { Link } from 'react-router-dom' // The Link component of react

function ErrorPage() {
  return (
    <main className="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error-page__welcome-link">
        Retourner sur la page d’accueil
      </Link>
    </main>
  )
}

export default ErrorPage
