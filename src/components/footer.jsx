import { useState } from 'react'

export default function Footer({ showToast }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  function subscribe(e) {
    e.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!valid) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setEmail('')
    showToast('Thanks for subscribing!')
  }

  return (
    <footer className="footer">
      <div className="footer-values">
        <span>SUSTAINABLE MATERIALS</span>
        <span>ETHICAL PRODUCTION</span>
        <span>COMMUNITY FOCUSED</span>
      </div>
      <form className="newsletter" onSubmit={subscribe}>
        <input type="text" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="btn btn-light small" type="submit">SUBSCRIBE</button>
      </form>
      {error && <p className="error">{error}</p>}
      <small>© 2026 C-Style. All rights reserved.</small>
    </footer>
  )
}