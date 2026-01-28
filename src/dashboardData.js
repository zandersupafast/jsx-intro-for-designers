/**
 * DASHBOARD DATA – Fake data for the dashboard
 * ---------------------------------------------
 * This file generates one object of data when the dashboard loads. The data
 * is randomized so it's never the same as the reference screenshot (different
 * names, amounts, company, earn amount).
 *
 * HOW IT'S USED: Dashboard.jsx calls getDashboardData() once (via useMemo) and
 * then uses the returned object in the JSX – e.g. data.gbpBalance, data.transaction.recipientName.
 * Designers don't need to change this file to style the UI; they just need to
 * know that the numbers and names on the dashboard come from here.
 */

/* Sample names we pick from at random for the transaction "recipient" row. */
const SAMPLE_NAMES = [
  'Alex Chen',
  'Jordan Taylor',
  'Sam Williams',
  'Casey Morgan',
  'Riley Davis',
  'Jamie Lee',
  'Morgan Blake',
  'Quinn Parker',
  'Reese Cooper',
  'Drew Bennett',
]

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randomAmount(min, max, decimals = 2) {
  const value = min + Math.random() * (max - min)
  return value.toFixed(decimals)
}

/**
 * Returns one object with all the data the dashboard needs.
 * Called once from Dashboard.jsx when the dashboard first renders.
 */
export function getDashboardData() {
  /* Main account balances. GBP always has a value; EUR and USD sometimes 0.00. */
  const gbpBalance = randomAmount(100, 2500)
  const eurBalance = Math.random() > 0.5 ? randomAmount(0, 1500) : '0.00'
  const usdBalance = Math.random() > 0.5 ? randomAmount(0, 2000) : '0.00'

  /* Sample transaction: random USD amount, then convert to GBP with a random rate. */
  const transactionUsd = randomAmount(800, 6000)
  const rate = 0.72 + Math.random() * 0.12
  const transactionGbp = (parseFloat(transactionUsd) * rate).toFixed(2)

  /* Transaction date: somewhere in the last 28 days, formatted e.g. "15 Jan 2026". */
  const daysAgo = Math.floor(Math.random() * 28) + 1
  const date = new Date()
  date.setDate(date.getDate() - daysAgo)
  const dateStr = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

  /* Header profile: company name and initials (picked together so they match). */
  const companies = ['Sample Co Ltd', 'Acme Design Ltd', 'Studio North Ltd', 'Workspace Ltd']
  const initials = ['SC', 'AD', 'SN', 'WS']
  const companyIndex = Math.floor(Math.random() * companies.length)

  /* Return one object. Dashboard uses: data.gbpBalance, data.transaction.recipientName, etc. */
  return {
    gbpBalance,
    eurBalance,
    usdBalance,
    transaction: {
      recipientName: pick(SAMPLE_NAMES),
      date: dateStr,
      amountUsd: parseFloat(transactionUsd).toLocaleString('en-US', { minimumFractionDigits: 2 }),
      amountGbp: parseFloat(transactionGbp).toLocaleString('en-GB', { minimumFractionDigits: 2 }),
    },
    companyName: companies[companyIndex],
    profileInitials: initials[companyIndex],
    earnAmount: Math.floor(80 + Math.random() * 120), /* e.g. A$80–A$200 */
  }
}
