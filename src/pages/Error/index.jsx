// our error page component
import { Link } from 'react-router-dom'
import './_index.scss'

function ErrorPage() {
  return (
    <main className="errorPage">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="welcomeLink">
        Retourner sur la page d’accueil
      </Link>
    </main>
  )
}

export default ErrorPage
