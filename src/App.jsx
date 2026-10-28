import { useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoStrip from './components/InfoStrip'
import Categories from './components/Categories'
import NewArrivals from './components/NewArrivals'
import Promos from './components/Promos'
import Collections from './components/Collections'
import CartDrawer from './components/CartDrawer'
import ChatWidget from './components/ChatWidget'
import Footer from './components/Footer'

export default function App() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [wishlist, setWishlist] = useLocalStorage('cstyle-wishlist', [])
  const [cart, setCart] = useLocalStorage('cstyle-cart', [])
  const [cartOpen, setCartOpen] = useState(false)
  const [toast, setToast] = useState('')

  function showToast(message) {
    setToast(message)
    setTimeout(() => setToast(''), 2500)
  }

  function goTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Set a filter, clear the search, then scroll to the products.
  function applyFilter(newFilter) {
    setFilter(newFilter)
    setSearch('')
    goTo('new-arrivals')
  }

  function toggleWishlist(id) {
    const isSaved = wishlist.includes(id)
    setWishlist(isSaved ? wishlist.filter((x) => x !== id) : [...wishlist, id])
    showToast(isSaved ? 'Removed from wishlist' : 'Added to wishlist')
  }

  function addToCart(product, color) {
    setCart([...cart, { cartId: Date.now(), name: product.name, price: product.price, color }])
    showToast(product.name + ' added to cart')
  }

  function removeFromCart(cartId) {
    setCart(cart.filter((item) => item.cartId !== cartId))
  }

  return (
    <>
      <Navbar
        search={search}
        setSearch={(text) => { setSearch(text); if (text) goTo('new-arrivals') }}
        applyFilter={applyFilter}
        wishlistCount={wishlist.length}
        cartCount={cart.length}
        openCart={() => setCartOpen(true)}
        showWishlist={() => { setFilter('wishlist'); setSearch(''); goTo('new-arrivals') }}
      />
      <main>
        <Hero goTo={goTo} applyFilter={applyFilter} />
        <InfoStrip showToast={showToast} goTo={goTo} />
        <Categories applyFilter={applyFilter} />
        <NewArrivals
          filter={filter}
          search={search}
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
          addToCart={addToCart}
          applyFilter={applyFilter}
        />
        <Promos showToast={showToast} applyFilter={applyFilter} />
        <Collections applyFilter={applyFilter} />
      </main>
      <Footer showToast={showToast} />
      <CartDrawer open={cartOpen} close={() => setCartOpen(false)} cart={cart} remove={removeFromCart} showToast={showToast} clear={() => setCart([])} />
      <ChatWidget />
      {toast && <div className="toast">{toast}</div>}
    </>
  )
}