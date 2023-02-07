/* The global set up of the app */

import React from 'react' // To use react library
import ReactDOM from 'react-dom/client' // Module that allows our app to render elemnts in the dom for exemple
import Router from './routes/Router' // The routes of the app
import './assets/scss/Main.scss' // The style of the app and its components

const root = ReactDOM.createRoot(document.getElementById('root')) // we select the place where our app will render on the index.html page
root.render(
  <React.StrictMode>
    {/* we call the router component to allow the navigation on our app */}
    <Router />
  </React.StrictMode>
)
