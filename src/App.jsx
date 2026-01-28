/**
 * APP.JSX – Root component (login → dashboard)
 * --------------------------------------------
 * This file controls which screen the user sees:
 * - Not logged in → login form (this file)
 * - Logged in → Dashboard (Dashboard.jsx)
 *
 * HOW IT WORKS:
 * - useState(false) keeps track of "are they logged in?"
 * - When the form is submitted, handleSubmit runs: we prevent the page from
 *   reloading, then call setIsLoggedIn(true). React re-renders and shows
 *   the Dashboard instead. No new page load – that's a "single-page app."
 *
 * HTML → JSX: class → className, for → htmlFor, stroke-width → strokeWidth,
 * comments: <!-- --> → { slash-star star-slash }, <img> → <img />
 */

import { useState } from 'react'
import Dashboard from './Dashboard.jsx'

function App() {
  /* State: one value (isLoggedIn) that can change. When it becomes true, we show Dashboard. */
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  /* Called when the user clicks "Log in". We stop the form from reloading the page, then set state. */
  function handleSubmit(e) {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  /* Conditional rendering: only one of these is on screen at a time. */
  if (isLoggedIn) {
    return <Dashboard />
  }

  /* Login screen: nav bar + main content (form, links, social login). */
  return (
    <>
      {/* ---------- TOP NAVIGATION ---------- */}
      {/* Semantic HTML: <nav> = navigation. In JSX we use className (not class). */}
      <nav className="top-nav">
        <div className="nav-container">
          <div className="logo">
            {/* Original: assets/images/wise_logo.png. In JSX, img must self-close: <img ... /> */}
            <img src="/assets/images/wise_logo.png" alt="WISE" className="logo-img" />
          </div>
          {/* aria-label stays the same - good for accessibility */}
          <button type="button" className="close-btn" aria-label="Close">
            {/* SVG: in JSX, stroke-width becomes strokeWidth (camelCase) */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="#0A5F55" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>
      <div className="nav-separator" />

      {/* ---------- MAIN CONTENT (centred column) ---------- */}
      <div className="content-wrapper">
        <main className="main-content">
          <h1 className="welcome-title">Welcome back.</h1>
          <p className="signup-prompt">
            New here? <a href="#" className="signup-link">Sign up</a>
          </p>

          {/* ---------- LOGIN FORM ---------- */}
          {/* onSubmit: we pass our handleSubmit so we can run JS (setIsLoggedIn) instead of reloading. */}
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              {/* In JSX, "for" becomes htmlFor – it links this label to the input with id="email". */}
              <label htmlFor="email">Your email address</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Your password</label>
              <div className="password-input-wrapper">
                <input type="password" id="password" name="password" required />
                <button type="button" className="toggle-password" aria-label="Toggle password visibility">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            </div>

            <button type="submit" className="login-btn">Log in</button>
          </form>

          <a href="#" className="trouble-link">Trouble logging in?</a>

          {/* ---------- ALTERNATIVE LOGIN (social / passkey) ---------- */}
          <div className="alternative-login">
            <p className="or-text">Or log in with</p>
            <div className="social-buttons">
              <button type="button" className="social-btn google-btn" aria-label="Log in with Google">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </button>
              <button type="button" className="social-btn facebook-btn" aria-label="Log in with Facebook">
                <svg viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button type="button" className="social-btn apple-btn" aria-label="Log in with Apple">
                <svg viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
              </button>
            </div>
            <button type="button" className="passkey-btn" aria-label="Log in with a passkey">
              <svg className="passkey-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H11V21H5V3H13V9H21ZM14 10V12H22V10H14ZM14 14V16H22V14H14ZM14 18V20H19V18H14Z" fill="currentColor" />
              </svg>
              Log in with a passkey
            </button>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
