import { products } from '../data/products'
import ProductCard from './ProductCard'

export default function NewArrivals({ filter, search, wishlist, toggleWishlist, addToCart, applyFilter }) {
  const shown = products.filter((p) => {
    const matchesFilter =
      filter === 'all' ? true : filter === 'wishlist' ? wishlist.includes(p.id) : p.tags.includes(filter)
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase().trim())
    return matchesFilter && matchesSearch
  })

  return (
    <section className="section" id="new-arrivals">
      <div className="section-head">
        <div>
          <h2>NEW ARRIVALS</h2>
          <p className="sub">
            {filter === 'all' ? 'Fresh styles. Just in.' : 'Showing: ' + filter}
          </p>
        </div>
        {filter !== 'all' && <button className="link-btn" onClick={() => applyFilter('all')}>Clear filter ✕</button>}
      </div>

      {shown.length === 0 ? (
        <p className="empty">No products found. Try another search or filter.</p>
      ) : (
        <div className="product-grid">
          {shown.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              saved={wishlist.includes(p.id)}
              toggleWishlist={toggleWishlist}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </section>
  )
}