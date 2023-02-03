import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes/Router'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root')) // we select the place where our app will render on the index.html page
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
