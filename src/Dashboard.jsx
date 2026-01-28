/**
 * DASHBOARD.JSX – Page after login (Wise-style UI)
 * ------------------------------------------------
 * STRUCTURE: This page has three main areas:
 * 1. Sidebar (left) – logo + nav links (Home, Cards, Transactions, etc.)
 * 2. Header (top right) – "Earn A$..." button + profile (initials, company name)
 * 3. Main content – account summary, currency cards, promo card, transactions list
 *
 * DATA: All numbers and names come from dashboardData.js (randomized). We use
 * useMemo so the data is generated once when the page loads and doesn't change
 * on re-render. In the JSX you'll see {data.gbpBalance}, {data.transaction.recipientName}
 * etc. – anything in { curly braces } is JavaScript inserting a value.
 *
 * STYLING: Designers can change the look in index.css – search for "dashboard"
 * to find the section that styles this page.
 */

import { useMemo } from 'react'
import { getDashboardData } from './dashboardData'

function Dashboard() {
  /* useMemo: run getDashboardData() once when Dashboard first appears. [] = no dependencies. */
  const data = useMemo(() => getDashboardData(), [])

  return (
    /* Outer layout: flexbox so sidebar (left) and main area (right) sit side by side. */
    <div className="dashboard-layout">
      {/* ---------- SIDEBAR (fixed left, 240px) ---------- */}
      {/* <aside> = semantic HTML for secondary content (here: navigation). */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-logo">
          <img src="/assets/images/wise_logo.png" alt="WISE" className="logo-img" />
        </div>
        <nav className="sidebar-nav">
          {/* active = current page; aria-current helps screen readers. */}
          <a href="#" className="sidebar-link active" aria-current="page">
            <svg className="sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </a>
          <a href="#" className="sidebar-link">
            <svg className="sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
            Cards
          </a>
          <a href="#" className="sidebar-link">
            <svg className="sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
            Transactions
          </a>
          <a href="#" className="sidebar-link">
            <svg className="sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            Payments
            <svg className="sidebar-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
          <a href="#" className="sidebar-link">
            <svg className="sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Team
          </a>
          <a href="#" className="sidebar-link">
            <svg className="sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Recipients
          </a>
          <a href="#" className="sidebar-link">
            <svg className="sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
            Insights
          </a>
        </nav>
      </aside>

      {/* ---------- MAIN AREA (right side: header + content) ---------- */}
      <div className="dashboard-main">
        {/* Top bar: CTA button (amount from data) + profile (initials + company from data). */}
        <header className="dashboard-header">
          <button type="button" className="btn-earn">Earn A${data.earnAmount}</button>
          <button type="button" className="header-profile" aria-label="Account menu">
            <span className="profile-avatar">{data.profileInitials}</span>
            <span className="profile-name">{data.companyName}</span>
            <svg className="profile-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </header>

        <div className="dashboard-content">
          {/* ---------- ACCOUNT SUMMARY ---------- */}
          {/* Main account: icon, balance (from data), and action buttons. */}
          <section className="account-section">
            <div className="account-header">
              <div className="account-title-row">
                <span className="account-icon" aria-hidden="true" />
                <div>
                  <h2 className="account-title">Main account</h2>
                  <p className="account-balance">
                    {data.gbpBalance} GBP
                    <svg className="balance-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </p>
                </div>
              </div>
              <div className="account-actions">
                <button type="button" className="btn-primary">Send</button>
                <button type="button" className="btn-primary">Add money</button>
                <button type="button" className="btn-primary btn-get-paid">
                  Get paid
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Currency cards: one card per currency (GBP, EUR, USD) + "Add another account". */}
            <div className="currency-cards">
              <div className="currency-card">
                <span className="currency-flag" aria-hidden="true">GBP</span>
                <span className="currency-code">GBP</span>
                <span className="currency-balance">{data.gbpBalance}</span>
              </div>
              <div className="currency-card">
                <span className="currency-flag" aria-hidden="true">EUR</span>
                <span className="currency-code">EUR</span>
                <span className="currency-balance">{data.eurBalance}</span>
              </div>
              <div className="currency-card">
                <span className="currency-flag" aria-hidden="true">USD</span>
                <span className="currency-code">USD</span>
                <span className="currency-balance">{data.usdBalance}</span>
              </div>
              <button type="button" className="currency-card currency-card-add">
                <span className="add-icon">+</span>
                Add another account
              </button>
            </div>
          </section>

          {/* ---------- PROMO CARD (marketing block) ---------- */}
          <section className="promo-card">
            <span className="promo-icon" aria-hidden="true" />
            <h3 className="promo-title">Try the business current account</h3>
            <p className="promo-desc">Be one of the first to try the upgraded Wise current account.</p>
            <button type="button" className="btn-primary btn-promo">Find out more</button>
          </section>

          {/* ---------- TRANSACTIONS LIST ---------- */}
          {/* One sample row: recipient name, date, amounts – all from data (randomized). */}
          <section className="transactions-section">
            <div className="transactions-header">
              <h3 className="transactions-title">Transactions</h3>
              <a href="#" className="transactions-see-all">See all</a>
            </div>
            <div className="transaction-row">
              <span className="transaction-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="5 12 12 5 19 12" />
                </svg>
              </span>
              <div className="transaction-details">
                <p className="transaction-recipient">{data.transaction.recipientName}</p>
                <p className="transaction-meta">Sent by you · {data.transaction.date}</p>
              </div>
              <div className="transaction-amounts">
                <span className="transaction-amount-usd">{data.transaction.amountUsd} USD</span>
                <span className="transaction-amount-gbp">{data.transaction.amountGbp} GBP</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
