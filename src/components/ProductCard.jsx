import { useState } from 'react'
import { Heart } from 'lucide-react'

export default function ProductCard({ product, saved, toggleWishlist, addToCart }) {
  const [color, setColor] = useState(product.colors[0])

  return (
    <article className="card">
      <div className="photo" style={{ background: product.bg }}>
        <img src={product.image} alt={product.name} />
        <button className={saved ? 'heart saved' : 'heart'} aria-label="Wishlist" onClick={() => toggleWishlist(product.id)}>
          <Heart size={16} fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>
      <h3>{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <div className="dots">
        {product.colors.map((c) => (
          <button
            key={c}
            aria-label={'Colour ' + c}
            className={c === color ? 'dot active' : 'dot'}
            style={{ background: c }}
            onClick={() => setColor(c)}
          />
        ))}
      </div>
      <button className="btn btn-dark small" onClick={() => addToCart(product, color)}>Add to cart</button>
    </article>
  )
}