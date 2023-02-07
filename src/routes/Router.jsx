/* Router set up */
import Home from '.././pages/Home' // Our Home page component
import About from '.././pages/About' // Our About page component
import AccomodationDetails from '.././pages/AccomodationDetails' // Our Product page component
import ErrorPage from '.././pages/Error' // Our Error page component
import Header from '.././components/Header' // Our Header component
import Footer from '.././components/Footer' // Our Footer component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // we import react router components to be able to build the app navigation

function router() {
  return (
    <Router>
      {/* Router : The wrapper that allows us to add a route to our components */}
      <Header />
      <Routes>
        {/* Routes & Route : The components that allow our app to render only the components defined on a specific path */}
        <Route path="/" element={<Home />} />
        <Route path="/accomodation/:id" element={<AccomodationDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default router
