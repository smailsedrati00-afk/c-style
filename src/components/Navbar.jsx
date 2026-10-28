import { useState } from 'react'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react'

const links = [
  { label: 'NEW IN', filter: 'all' },
  { label: 'WOMEN', filter: 'women' },
  { label: 'MEN', filter: 'men' },
  { label: 'SHOES', filter: 'Shoes' },
  { label: 'ACCESSORIES', filter: 'Accessories' },
  { label: 'SALE', filter: 'Sale' },
]

export default function Navbar({ search, setSearch, applyFilter, wishlistCount, cartCount, openCart, showWishlist }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function chooseLink(filter) {
    applyFilter(filter)
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <button className="icon-btn menu-btn" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <button className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="logo-circle">C</span> C-STYLE
      </button>

      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {links.map((link) => (
          <button key={link.label} onClick={() => chooseLink(link.filter)}>{link.label}</button>
        ))}
      </nav>

      <div className="nav-tools">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for items, brands..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search size={16} />
        </div>
        <button className="icon-btn" aria-label="Wishlist" onClick={showWishlist}>
          <Heart size={20} />
          {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
        </button>
        <button className="icon-btn" aria-label="Cart" onClick={openCart}>
          <ShoppingBag size={20} />
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  )
}