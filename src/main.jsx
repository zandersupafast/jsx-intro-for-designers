/**
 * MAIN.JSX – Entry point (where the app starts)
 * ----------------------------------------------
 * When you open the app in the browser, this file runs first. It:
 * 1. Finds the <div id="root"> in index.html
 * 2. Creates a React "root" there
 * 3. Renders the <App /> component inside it
 *
 * Everything you see (login form, then dashboard) is built by App and the
 * components it chooses to show. index.html only has that one empty div –
 * React fills it with the rest of the UI.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
