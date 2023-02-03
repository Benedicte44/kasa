// Definition of the router
import Home from '.././pages/Home'
import About from '.././pages/About'
import AccomodationDetails from '.././pages/AccomodationDetails'
import ErrorPage from '.././pages/Error'
import Header from '.././components/Header'
import Footer from '.././components/Footer'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import aboutData from './data/about.json'

function router() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accomodation/:id" element={<AccomodationDetails />} />
        <Route
          path="/about"
          element={
            <About //data={aboutData}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default router
